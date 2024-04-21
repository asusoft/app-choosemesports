import { describe, it, expect } from 'bun:test'
import { ErrorStatus } from '../../generated/types/graphql'
import { createError } from '../utils'
import { useClient } from '../fixtures'
import { useAdminToken } from '../admin/request'
import { usePlayerToken } from '../auth/request'
import { genSportIn } from './gens'
import { createSport } from './request'

describe('Create Sport', () => {
    const client = useClient()
    const adminAccessToken = useAdminToken(client)
    const playerAccessToken = usePlayerToken(client)
    
    const sportIn = genSportIn()


    it('Should reject unauthenticated request', async () => {
        const response = await createSport(client, { input: sportIn }, undefined)
        if (response.createSport.__typename !== 'BaseError') {
            throw createError(response.createSport)
        }
        expect(response.createSport.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Should reject non admin account request', async () => {
        const response = await createSport(client, { input: sportIn }, playerAccessToken())
        if (response.createSport.__typename !== 'BaseError') {
            throw createError(response.createSport)
        }
        expect(response.createSport.status).toBe(ErrorStatus.NotEnoughPermissions)
    })

    it('Successful create sport', async () => {
        const response = await createSport(client, { input: sportIn }, adminAccessToken())
        if (response.createSport.__typename === 'BaseError') {
            throw createError(response.createSport)
        }
        expect(response.createSport.id).not.toBeNull()
        expect(response.createSport.name).toBe(sportIn.name)
    })
})
