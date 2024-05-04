import { describe, it, expect } from 'bun:test'
import { ErrorStatus } from '../../generated/types/graphql'
import { createError } from '../utils'
import { uploadVideo } from './requests'
import { genVideo } from './utils'
import { useClient } from '../fixtures'
import { usePlayerToken } from '../auth/request'

describe('Upload Video', () => {
    const client = useClient()
    let accessToken = usePlayerToken(client)
    const file = genVideo()


    it('Should reject unauthenticated request', async () => {
        const response = await uploadVideo(client, { file }, undefined)
        if (response.uploadVideo.__typename !== 'BaseError') {
            throw createError(response.uploadVideo)
        }
        expect(response.uploadVideo.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Successful upload', async () => {
        const media = await uploadVideo(client, { file }, accessToken())
        if (media.uploadVideo.__typename === 'BaseError') {
            throw createError(media.uploadVideo)
        }
        expect(media.uploadVideo.id).not.toBeNull()
        expect(media.uploadVideo.path).not.toBeNull()
        expect(media.uploadVideo.type).not.toBeNull()
    })
})
