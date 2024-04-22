import { expect, describe, it, beforeAll } from 'bun:test'
import { ErrorStatus } from '../../generated/types/graphql'
import { createError } from '../utils'
import { useClient } from '../fixtures'
import { usePlayerToken } from '../auth/request'
import { createSportAndEnsureOK, retrieveSport } from './request'
import { genSportIn } from './gens'
import { useAdminToken } from '../admin/request'

describe('Retrieve sport', () => {
    const client = useClient()
    const adminAccessToken = useAdminToken(client)
    const accessToken = usePlayerToken(client)

    const sportIn = genSportIn()
    let sportID: string

    beforeAll(async () => {
        const sport = await createSportAndEnsureOK(client, { input: sportIn}, adminAccessToken())

        sportID = sport.id
    })

    it(
        'Should return NOT_AUTHENTICATED on unathenticated request',
        async () => {
            const response = await retrieveSport(client, {id: sportID}, undefined)
            const data = response.retrieveSport
            if (data.__typename === 'Sport') {
                throw createError(data)
            }
            expect(data.status).toBe(ErrorStatus.NotAuthenticated)
        }
    )

    it('Should return array of sport on valid request', async () => {
        const response = await retrieveSport(
            client, { id: sportID }, accessToken()
        )
       
        if (response.retrieveSport.__typename !== 'Sport') {
            throw createError(response.retrieveSport)
        }
        const retrievedSport = response.retrieveSport
        expect(retrievedSport.id).toBe(sportID)
        expect(retrievedSport.name).toBe(sportIn.name)
    })
})
