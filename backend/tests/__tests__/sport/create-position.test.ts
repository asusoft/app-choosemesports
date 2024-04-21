import { describe, it, expect, beforeAll } from 'bun:test'
import { ErrorStatus, PositionIn } from '../../generated/types/graphql'
import { createError } from '../utils'
import { useClient } from '../fixtures'
import { useAdminToken } from '../admin/request'
import { usePlayerToken } from '../auth/request'
import { genPositionIn, genSportIn } from './gens'
import { createPosition, createSportAndEnsureOK } from './request'

describe('Create Position', () => {
    const client = useClient()
    const adminAccessToken = useAdminToken(client)
    const playerAccessToken = usePlayerToken(client)

    const sportIn = genSportIn()
    let positionIn: PositionIn

    beforeAll(async () => {
        const sport = await createSportAndEnsureOK(client, { input: sportIn}, adminAccessToken())

        positionIn = genPositionIn(sport.id)

    })

    it('Should reject unauthenticated request', async () => {
        const response = await createPosition(client, { input: positionIn }, undefined)
        if (response.createPosition.__typename !== 'BaseError') {
            throw createError(response.createPosition)
        }
        expect(response.createPosition.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Should reject non admin account request', async () => {
        const response = await createPosition(client, { input: positionIn }, playerAccessToken())
        if (response.createPosition.__typename !== 'BaseError') {
            throw createError(response.createPosition)
        }
        expect(response.createPosition.status).toBe(ErrorStatus.NotEnoughPermissions)
    })

    it('Successful create position', async () => {
        const position = await createPosition(client, { input: positionIn }, adminAccessToken())
        if (position.createPosition.__typename === 'BaseError') {
            throw createError(position.createPosition)
        }
        expect(position.createPosition.id).not.toBeNull()
        expect(position.createPosition.name).toBe(positionIn.name)
    })
})
