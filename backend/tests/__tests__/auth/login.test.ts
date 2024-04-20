import { beforeAll, describe, expect, it } from 'bun:test'
import type { GraphQLClient } from 'graphql-request'
import { ErrorStatus, type PlayerIn, ERole } from '../../generated/types/graphql'
import { createError, createGraphqlClient } from '../utils'

import {
    genLogin,
    genPassword,
} from '../utils/gens'
import { genPlayerIn } from '../player/gens'
import { createPlayer } from '../player/request'
import { performLogin } from './request'

describe('Login', () => {
    let client: GraphQLClient
    let playerIn: PlayerIn

    beforeAll(async () => {
        client = createGraphqlClient()
        playerIn = genPlayerIn()
        const response = await createPlayer(
            client, { input: playerIn }, undefined
        )
        if (response.createPlayer.__typename === 'ErrorWithFields') {
            throw createError(response.createPlayer)
        }
    })

    it('Should return NOT_FOUND on wrong login', async () => {
        const response = await performLogin(
            client,
            {input : { login: genLogin(), password: genPassword(), role: ERole.Player }},
            undefined
        )
        if (response.login.__typename === 'AuthUser') {
            throw createError(response.login)
        }
        expect(response.login.status).toBe(ErrorStatus.NotFound)
    })

    it('Should return NOT_FOUND on wrong role', async () => {
        const response = await performLogin(
            client,
            {input: { login: genLogin(), password: genPassword(), role: ERole.Scout }},
            undefined
        )
        if (response.login.__typename === 'AuthUser') {
            throw createError(response.login)
        }
        expect(response.login.status).toBe(ErrorStatus.NotFound)
    })

    it('Should return INVALID_CREDENTIALSon wrong password', async () => {
        const response = await performLogin(
            client,
            {input: { login: playerIn.login, password: genPassword(), role: ERole.Player }},
            undefined
        )
        if (response.login.__typename === 'AuthUser') {
            throw createError(response.login)
        }
        expect(response.login.status).toBe(ErrorStatus.InvalidCredentials)
    })

    it('Should return INVALID_INPUT_DATA on invalid login', async () => {
        const response = await performLogin(
            client,
            {input: { login: '', password: genPassword(), role: ERole.Player }},
            undefined
        )
        if (response.login.__typename === 'AuthUser') {
            throw createError(response.login)
        }
        expect(response.login.status).toBe(ErrorStatus.InvalidInputData)
    })

    it('Should return player tokens on right credentials', async () => {
        const response = await performLogin(
            client,
            {input: { login: playerIn.login, password: playerIn.password, role: ERole.Player }},
            undefined
        )
        if (response.login.__typename !== 'AuthUser') {
            throw createError(response.login)
        }
        expect(response.login.token).not.toBeUndefined()
        expect(response.login.user).not.toBeUndefined()
        expect(response.login.user.role).toBe(ERole.Player)
    })
})
