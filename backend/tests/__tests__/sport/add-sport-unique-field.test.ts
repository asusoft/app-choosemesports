import { describe, it, expect, beforeAll } from 'bun:test'
import { ErrorStatus, UniqueFieldIn } from '../../generated/types/graphql'
import { createError, genString } from '../utils'
import { useClient } from '../fixtures'
import { useAdminToken } from '../admin/request'
import { usePlayerToken } from '../auth/request'
import { genSportIn, genUniqueFieldIn } from './gens'
import { addSportUniqueField, addSportUniqueFieldAndEnsureOK, createSportAndEnsureOK } from './request'

describe('Add sport unique field', () => {
    const client = useClient()
    const adminAccessToken = useAdminToken(client)
    const playerAccessToken = usePlayerToken(client)

    const sportIn = genSportIn()
    let uniqueFieldIn: UniqueFieldIn

    beforeAll(async () => {
        const sport = await createSportAndEnsureOK(client, { input: sportIn}, adminAccessToken())

        uniqueFieldIn = genUniqueFieldIn(sport.id)

    })

    it('Should reject unauthenticated request', async () => {
        const response = await addSportUniqueField(client, { input: uniqueFieldIn }, undefined)
        const data = response.addSportUniqueField
        if (data == null) {
            throw createError(response.addSportUniqueField)
        }
        expect(data.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Should reject non admin account request', async () => {
        const response = await addSportUniqueField(client, { input: uniqueFieldIn }, playerAccessToken())
        const data = response.addSportUniqueField
        if (data == null) {
            throw createError(response.addSportUniqueField)
        }
        expect(data.status).toBe(ErrorStatus.NotEnoughPermissions)
    })

    it('Should return ALREADY_DONE on duplicate field', async () => {
       await addSportUniqueFieldAndEnsureOK(client, { input: uniqueFieldIn }, adminAccessToken())
        const response = await addSportUniqueField(client, { input: uniqueFieldIn }, adminAccessToken())
        const data = response.addSportUniqueField
        if (data == null) {
            throw createError(response.addSportUniqueField)
        }
        expect(data.status).toBe(ErrorStatus.AlreadyDone)
    })

    it('Successful add unique field', async () => {
        const response = await addSportUniqueField(client, { input: { sportID: uniqueFieldIn.sportID, label: genString() } }, adminAccessToken())
        const data = response.addSportUniqueField
        expect(data).toBeNull()

        //const sport = retrieveSportAndEnsureOK(client, { id: uniqueFieldIn.sportID}, adminAccessToken())
    })
})
