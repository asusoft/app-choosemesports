import { describe, it, expect, beforeAll } from 'bun:test'
import { ErrorStatus } from '../../generated/types/graphql'
import { createError } from '../utils'
import { uploadVideo } from './requests'
import { genVideo } from './utils'
import { useAccessToken, useAdminAccessToken, useScholarAccessToken } from '../users/fixtures'
import { useClient } from '../fixtures'

describe('Upload Video', () => {
    const client = useClient()
    let userAccessToken: string
    let adminAccessToken: string
    let scholarAccessToken: string
    const file = genVideo()

    beforeAll(async () => {
        userAccessToken = await useAccessToken(client)
        adminAccessToken = await useAdminAccessToken(client)
        scholarAccessToken = await useScholarAccessToken(client)
    })

    it('Should reject unauthenticated request', async () => {
        const response = await uploadVideo(client, { file }, undefined)
        if (response.uploadVideo.__typename !== 'BaseError') {
            throw createError(response.uploadVideo)
        }
        expect(response.uploadVideo.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Should reject non scholar account request', async () => {
        const response = await uploadVideo(client, { file }, userAccessToken)
        if (response.uploadVideo.__typename !== 'BaseError') {
            throw createError(response.uploadVideo)
        }

        const response1 = await uploadVideo(client, { file }, adminAccessToken)
        if (response1.uploadVideo.__typename !== 'BaseError') {
            throw createError(response.uploadVideo)
        }
        expect(response.uploadVideo.status).toBe(ErrorStatus.NotEnoughPermissions)
    })

    it('Successful upload', async () => {
        const media = await uploadVideo(client, { file }, scholarAccessToken)
        if (media.uploadVideo.__typename === 'BaseError') {
            throw createError(media.uploadVideo)
        }
        expect(media.uploadVideo.id).not.toBeNull()
        expect(media.uploadVideo.path).not.toBeNull()
        expect(media.uploadVideo.type).not.toBeNull()
    })
})
