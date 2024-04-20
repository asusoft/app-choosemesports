import { beforeAll, describe, expect, it } from 'bun:test'
import type { GraphQLClient } from 'graphql-request'
import { ErrorStatus, AdminIn } from '../../generated/types/graphql'
import { createError, createGraphqlClient } from '../utils'
import {
    genLogin,
    genPassword,
} from '../utils/gens'
import { createAdmin, performAdminLogin } from './request'
import { genAdminIn } from './gens'

describe('Login', () => {
    let client: GraphQLClient
    let adminIn: AdminIn

    beforeAll(async () => {
        client = createGraphqlClient()
        adminIn = genAdminIn()
        const response = await createAdmin(
            client, { input: adminIn }, undefined
        )
        if (response.createAdmin.__typename === 'ErrorWithFields') {
            throw createError(response.createAdmin)
        }
    })

    it('Should return INVALID_CREDENTIALS on wrong login', async () => {
        const response = await performAdminLogin(
            client,
            {input : { login: genLogin(), password: genPassword() }},
            undefined
        )
        if (response.adminLogin.__typename === 'AuthAdmin') {
            throw createError(response.adminLogin)
        }
        expect(response.adminLogin.status).toBe(ErrorStatus.InvalidCredentials)
    })

    it('Should return INVALID_CREDENTIALS on wrong password', async () => {
        const response = await performAdminLogin(
            client,
            {input: { login: adminIn.login, password: genPassword() }},
            undefined
        )
        if (response.adminLogin.__typename === 'AuthAdmin') {
            throw createError(response.adminLogin)
        }
        expect(response.adminLogin.status).toBe(ErrorStatus.InvalidCredentials)
    })

    it('Should return INVALID_INPUT_DATA on invalid login', async () => {
        const response = await performAdminLogin(
            client,
            {input: { login: '', password: genPassword() }},
            undefined
        )
        if (response.adminLogin.__typename === 'AuthAdmin') {
            throw createError(response.adminLogin)
        }
        expect(response.adminLogin.status).toBe(ErrorStatus.InvalidInputData)
    })

    it('Should return admin tokens on right credentials', async () => {
        const response = await performAdminLogin(
            client,
            {input: { login: adminIn.login, password: adminIn.password }},
            undefined
        )
        if (response.adminLogin.__typename !== 'AuthAdmin') {
            throw createError(response.adminLogin)
        }
        expect(response.adminLogin.token).not.toBeUndefined()
        expect(response.adminLogin.admin).not.toBeUndefined()
        expect(response.adminLogin.admin.login).toBe(adminIn.login)
    })
})
