import { describe, it, expect, beforeAll } from 'bun:test'
import { ErrorStatus, VideoIn } from '../../generated/types/graphql'
import { createError } from '../utils'
import { postVideo } from './request'
import { useClient } from '../fixtures'
import { genVideoIn } from './gens'
import { usePlayerToken } from '../auth/request'

describe('Post Video', () => {
    const client = useClient()
    let accessToken = usePlayerToken(client)

    let video: VideoIn

    beforeAll(async () => {
        video = await genVideoIn(client, accessToken())
    })
    
    it('Should reject unauthenticated request', async () => {
        const response = await postVideo(client, { input:  video }, undefined)
        if (response.postVideo.__typename !== 'BaseError') {
            throw createError(response.postVideo)
        }
        expect(response.postVideo.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Successful posting of video', async () => {
        const response = await postVideo(client, { input: video }, accessToken())

        if (response.postVideo.__typename !== 'Video') {
            throw createError(response.postVideo)
        }

        expect(response.postVideo.id).not.toBeNull()
        expect(response.postVideo.author).not.toBeNull()
        expect(response.postVideo.attachement).not.toBeNull()
        expect(response.postVideo.attachement.id).not.toBeNull()
        expect(response.postVideo.attachement.path).not.toBeNull()
        expect(response.postVideo.isApproved).toBeFalse()
        expect(response.postVideo.showInProfile).toBeFalse()
    })
})
