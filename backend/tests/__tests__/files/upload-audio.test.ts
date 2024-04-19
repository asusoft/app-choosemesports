import { describe, it, expect, beforeAll } from 'bun:test'
import { ErrorStatus } from '../../generated/types/graphql'
import { createError } from '../utils'
import { uploadAudio } from './requests'
import { genAudio } from './utils'
import { useAccessToken, useAdminAccessToken, useScholarAccessToken } from '../users/fixtures'
import { useClient } from '../fixtures'

describe('Upload Audio', () => {
    const client = useClient()
    let userAccessToken: string
    let adminAccessToken: string
    let scholarAccessToken: string
    const file = genAudio()

    beforeAll(async () => {
        userAccessToken = await useAccessToken(client)
        adminAccessToken = await useAdminAccessToken(client)
        scholarAccessToken = await useScholarAccessToken(client)
    })
    

    it('Should reject unauthenticated request', async () => {
        const response = await uploadAudio(client, { file }, undefined)
        if (response.uploadAudio.__typename !== 'BaseError') {
            throw createError(response.uploadAudio)
        }
        expect(response.uploadAudio.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Should reject non scholar account request', async () => {
        const response = await uploadAudio(client, { file }, userAccessToken)
        if (response.uploadAudio.__typename !== 'BaseError') {
            throw createError(response.uploadAudio)
        }

        const response1 = await uploadAudio(client, { file }, adminAccessToken)
        if (response1.uploadAudio.__typename !== 'BaseError') {
            throw createError(response.uploadAudio)
        }
        expect(response.uploadAudio.status).toBe(ErrorStatus.NotEnoughPermissions)
    })

    it('Successful upload', async () => {
        const media = await uploadAudio(client, { file }, scholarAccessToken)
        if (media.uploadAudio.__typename === 'BaseError') {
            throw createError(media.uploadAudio)
        }
        expect(media.uploadAudio.id).not.toBeNull()
        expect(media.uploadAudio.path).not.toBeNull()
        expect(media.uploadAudio.type).not.toBeNull()
    })
})
