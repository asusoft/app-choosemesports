import { beforeAll, describe, expect, it } from 'bun:test'
import { type GraphQLClient } from 'graphql-request'
import { ERole, ErrorStatus, type PlayerIn } from '../../generated/types/graphql'
import { createError, createGraphqlClient } from '../utils'
import { genPlayerIn } from '../player/gens'
import { createPlayer, getPlayerMe } from './request'
import { performLogin } from '../auth/request'


describe('GetMe', () => {
    let client: GraphQLClient
    let playerIn: PlayerIn
    let accessToken: string
    let authUserID: string

    beforeAll(async () => {
        client = createGraphqlClient()
        playerIn = genPlayerIn()
        const playerResponse = await createPlayer(
            client, { input: playerIn }, undefined
        )
        if (playerResponse.createPlayer.__typename === 'ErrorWithFields') {
            throw createError(playerResponse.createPlayer)
        } else { authUserID = playerResponse.createPlayer.user.id }
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
        const response = await getPlayerMe(client, {}, undefined)
        if (response.getPlayerMe.__typename !== 'BaseError') {
            throw createError(response.getPlayerMe)
        }
        expect(response.getPlayerMe.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Should return player while authenticated', async () => {
        const response = await getPlayerMe(client, {}, accessToken)
        if (response.getPlayerMe.__typename === 'BaseError') {
            throw createError(response.getPlayerMe)
        }

        expect(response.getPlayerMe.dob).toBe(playerIn.dob)
        expect(response.getPlayerMe.userID).toBe(authUserID)
        expect(response.getPlayerMe.id).not.toBeUndefined()
    })
})
