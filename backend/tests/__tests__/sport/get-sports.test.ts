import { expect, describe, it } from 'bun:test'
import { ErrorStatus } from '../../generated/types/graphql'
import { createError } from '../utils'
import { useClient } from '../fixtures'
import { usePlayerToken } from '../auth/request'
import { getSports } from './request'

describe('Get sports', () => {
    const client = useClient()
    const accessToken = usePlayerToken(client)

    const LIMIT = 5

    it(
        'Should return NOT_AUTHENTICATED on unathenticated request',
        async () => {
            const response = await getSports(client, {}, undefined)
            const data = response.getSports
            if (data.__typename === 'SportList') {
                throw createError(data)
            }
            expect(data.status).toBe(ErrorStatus.NotAuthenticated)
        }
    )

    it('Should return array of sports on valid request', async () => {
        const response = await getSports(
            client, { limit: LIMIT }, accessToken()
        )
        const data = response.getSports
            if (data.__typename !== 'SportList') {
                throw createError(data)
            }
        const sports = data.sports
        expect(sports.length).toBeGreaterThan(0)
        expect(data.total).toBeGreaterThan(0)
        expect(sports.length).not.toBeGreaterThan(LIMIT)
        expect(data.total).not.toBeGreaterThan(LIMIT)
    })
})
