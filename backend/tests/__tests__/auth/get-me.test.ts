import { beforeAll, describe, expect, it } from 'bun:test'
import { type GraphQLClient } from 'graphql-request'
import { ErrorStatus, type PlayerIn, ERole } from '../../generated/types/graphql'
import { createError, createGraphqlClient } from '../utils'
import { genPlayerIn } from '../player/gens'
import { createPlayer } from '../player/request'
import { getMe, performLogin } from './request'


describe('GetMe', () => {
    let client: GraphQLClient
    let playerIn: PlayerIn
    let accessToken: string
    let id: string

    beforeAll(async () => {
        client = createGraphqlClient()
        playerIn = genPlayerIn()
        const playerResponse = await createPlayer(
            client, { input: playerIn }, undefined
        )
        if (playerResponse.createPlayer.__typename === 'ErrorWithFields') {
            throw createError(playerResponse.createPlayer)
        } else { id = playerResponse.createPlayer.user.id }
        const response = await performLogin(
            client,
            {
                input:
                {
                    login: playerIn.login,
                    password: playerIn.password,
                    role: ERole.Player
                }
            },
            undefined
        )
        if (response.login.__typename === 'AuthUser') {
            accessToken = response.login.token
        }
    })

    it('Should reject unauthenticated request', async () => {
        const response = await getMe(client, {}, undefined)
        if (response.getMe.__typename !== 'BaseError') {
            throw createError(response.getMe)
        }
        expect(response.getMe.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Should return user while authenticated', async () => {
        const response = await getMe(client, {}, accessToken)
        if (response.getMe.__typename === 'BaseError') {
            throw createError(response.getMe)
        }
        expect(response.getMe.login).toBe(playerIn.login)
        expect(response.getMe.email).toBe(playerIn.email)
        expect(response.getMe.id).toBe(id)
    })
})
