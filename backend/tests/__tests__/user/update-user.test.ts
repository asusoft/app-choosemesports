import { beforeAll, describe, expect, it } from 'bun:test'
import { ErrorStatus, type UserInUpdate } from '../../generated/types/graphql'
import { createError, genEmptyString, genString } from '../utils'
import { type Entry } from '../utils/entries'
import { useClient } from '../fixtures'
import { genUserInUpdate } from './gens'
import { getMe, getPlayerToken } from '../auth/request'
import { updateUser } from './request'

describe('Update user', () => {
    const client = useClient()
    const user = genUserInUpdate()
    let accessToken: string

    beforeAll(async () => {
        accessToken = await getPlayerToken(client)
    })

    it(
        'Should return NOT_AUTHENTICATED on unathenticated request',
        async () => {
            const response = await updateUser(
                client, { data: user }, undefined
            )
            const data = response.updateUser
            if (data == null) {
                throw createError(response.updateUser)
            }
            expect(data.status).toBe(ErrorStatus.NotAuthenticated)
        }
    )

    it.each<Entry<UserInUpdate>>(
        [
            ['bio', genEmptyString()],
            ['email', genString()],
            ['login', genEmptyString()],
            ['avatarID', genEmptyString()],
        ])(
        'Should return INVALID_INPUT_DATA for invalid %s:%j',
        async (field, value) => {
            const response = await updateUser(
                client, { data: { [field]: value } }, accessToken
            )
            const data = response.updateUser
            if (data == null) {
                throw createError(data)
            }
            expect(data.status).toBe(ErrorStatus.InvalidInputData)
        })

    it('Should return null, then return correct updated data', async () => {
        const response = await updateUser(
            client, { data: user }, accessToken
        )
        const data = response.updateUser
        expect(data).toBeNull()

        const meResponse = await getMe(
            client, {}, accessToken
        )
        const userData = meResponse.getMe
        if (userData.__typename !== 'User') {
            throw createError(userData)
        }
        if (user.bio) {
            expect(userData.bio).toBe(user.bio)
        }
        if (user.email) {
            expect(userData.email).toBe(user.email)
        }
        if (user.login) {
            expect(userData.login).toBe(user.login)
        }
        const response2 = await updateUser(
            client, { data: user }, accessToken
        )
        const data2 = response2.updateUser
        expect(data2).toBeNull()
    })
})
