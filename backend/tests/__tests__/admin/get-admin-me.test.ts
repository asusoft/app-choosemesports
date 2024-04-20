import { beforeAll, describe, expect, it } from 'bun:test'
import { type GraphQLClient } from 'graphql-request'
import { ErrorStatus, AdminIn } from '../../generated/types/graphql'
import { createError, createGraphqlClient } from '../utils'
import { createAdmin, getAdminMe, performAdminLogin } from './request'
import { genAdminIn } from './gens'


describe('GetAdminMe', () => {
    let client: GraphQLClient
    let adminIn: AdminIn
    let accessToken: string
    let id: string

    beforeAll(async () => {
        client = createGraphqlClient()
        adminIn = genAdminIn()
        const adminResponse = await createAdmin(
            client, { input: adminIn }, undefined
        )
        if (adminResponse.createAdmin.__typename === 'ErrorWithFields') {
            throw createError(adminResponse.createAdmin)
        } else { id = adminResponse.createAdmin.admin.id }
        const response = await performAdminLogin(
            client,
            {
                input:
                {
                    login: adminIn.login,
                    password: adminIn.password,
                }
            },
            undefined
        )
        if (response.adminLogin.__typename === 'AuthAdmin') {
            accessToken = response.adminLogin.token
        }
    })

    it('Should reject unauthenticated request', async () => {
        const response = await getAdminMe(client, {}, undefined)
        if (response.getAdminMe.__typename !== 'BaseError') {
            throw createError(response.getAdminMe)
        }
        expect(response.getAdminMe.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Should return admin while authenticated', async () => {
        const response = await getAdminMe(client, {}, accessToken)
        if (response.getAdminMe.__typename === 'BaseError') {
            throw createError(response.getAdminMe)
        }
        expect(response.getAdminMe.login).toBe(adminIn.login)
        expect(response.getAdminMe.id).toBe(id)
    })
})
