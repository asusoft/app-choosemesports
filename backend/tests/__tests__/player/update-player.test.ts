import { beforeAll, describe, expect, it } from 'bun:test'
import { ErrorStatus } from '../../generated/types/graphql'
import { createError } from '../utils'
import { useClient } from '../fixtures'
import { genPlayerInUpdate } from './gens'
import { usePlayerToken } from '../auth/request'
import { getPlayerMe, updatePlayer } from './request'

describe('Update player', () => {
    const client = useClient()
    const player = genPlayerInUpdate()
    let accessToken = usePlayerToken(client)

    it(
        'Should return NOT_AUTHENTICATED on unathenticated request',
        async () => {
            const response = await updatePlayer(
                client, { data: player }, undefined
            )
            const data = response.updatePlayer
            if (data == null) {
                throw createError(response.updatePlayer)
            }
            expect(data.status).toBe(ErrorStatus.NotAuthenticated)
        }
    )

    it('Should return null, then return correct updated data', async () => {
        const response = await updatePlayer(
            client, { data: player }, accessToken()
        )
        const data = response.updatePlayer
        expect(data).toBeNull()

        const meResponse = await getPlayerMe(
            client, {}, accessToken()
        )
        const playerData = meResponse.getPlayerMe
        if (playerData.__typename !== 'Player') {
            throw createError(playerData)
        }
        if (player.personal?.about) {
            expect(playerData.personal.about).toBe(player.personal.about)
        }
        if (player.personal?.height) {
            expect(playerData.personal.height).toBe(player.personal.height)
        }
        if (player.personal?.weight) {
            expect(playerData.personal.weight).toBe(player.personal.weight)
        }
        if (player.contact?.facebook) {
            expect(playerData.contact.facebook).toBe(player.contact.facebook)
        }
        if (player.contact?.instagram) {
            expect(playerData.contact.instagram).toBe(player.contact.instagram)
        }
        if (player.contact?.youtube) {
            expect(playerData.contact.youtube).toBe(player.contact.youtube)
        }
        if (player.contact?.twitter) {
            expect(playerData.contact.twitter).toBe(player.contact.twitter)
        }

        const response2 = await updatePlayer(
            client, { data: player }, accessToken()
        )
        const data2 = response2.updatePlayer
        expect(data2).toBeNull()
    })
})
