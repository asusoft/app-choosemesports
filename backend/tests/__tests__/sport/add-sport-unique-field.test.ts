import { describe, it, expect, beforeAll } from 'bun:test'
import { ErrorStatus, UniqueFieldIn } from '../../generated/types/graphql'
import { createError, genString } from '../utils'
import { useClient } from '../fixtures'
import { useAdminToken } from '../admin/request'
import { usePlayerToken } from '../auth/request'
import { genSportIn, genUniqueFieldIn } from './gens'
import { addSportUniqueField, addSportUniqueFieldAndEnsureOK, createSportAndEnsureOK, retrieveSportAndEnsureOK } from './request'

describe('Add sport unique field', () => {
    const client = useClient()
    const adminAccessToken = useAdminToken(client)
    const playerAccessToken = usePlayerToken(client)

    const sportIn = genSportIn()
    const sportIn2 = genSportIn()
    let uniqueFieldIn1: UniqueFieldIn
    let uniqueFieldIn2: UniqueFieldIn

    beforeAll(async () => {
        const sport = await createSportAndEnsureOK(client, { input: sportIn}, adminAccessToken())
        const sport2 = await createSportAndEnsureOK(client, { input: sportIn2}, adminAccessToken())

        uniqueFieldIn1 = genUniqueFieldIn(sport.id)
        uniqueFieldIn2 = genUniqueFieldIn(sport2.id)

    })

    it('Should reject unauthenticated request', async () => {
        const response = await addSportUniqueField(client, { input: uniqueFieldIn1 }, undefined)
        const data = response.addSportUniqueField
        if (data == null) {
            throw createError(response.addSportUniqueField)
        }
        expect(data.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Should reject non admin account request', async () => {
        const response = await addSportUniqueField(client, { input: uniqueFieldIn1 }, playerAccessToken())
        const data = response.addSportUniqueField
        if (data == null) {
            throw createError(response.addSportUniqueField)
        }
        expect(data.status).toBe(ErrorStatus.NotEnoughPermissions)
    })

    it('Should return ALREADY_DONE on duplicate field', async () => {
       await addSportUniqueFieldAndEnsureOK(client, { input: uniqueFieldIn1 }, adminAccessToken())
        const response = await addSportUniqueField(client, { input: uniqueFieldIn1 }, adminAccessToken())
        const data = response.addSportUniqueField
        if (data == null) {
            throw createError(response.addSportUniqueField)
        }
        expect(data.status).toBe(ErrorStatus.AlreadyDone)
    })

    it('Successful add unique field', async () => {
        const response = await addSportUniqueField(client, { input: uniqueFieldIn2  }, adminAccessToken())
        const data = response.addSportUniqueField
        expect(data).toBeNull()

        const sport = await retrieveSportAndEnsureOK(client, { id: uniqueFieldIn2.sportID}, adminAccessToken())

        expect(sport.uniqueFields).not.toBeUndefined()
        expect(sport?.uniqueFields?.[0].label).toBe(uniqueFieldIn2.label)
        expect(sport?.uniqueFields?.[0].sportID).toBe(uniqueFieldIn2.sportID)
    })
})
