import { describe, it, expect } from 'bun:test'
import { ErrorStatus } from '../../generated/types/graphql'
import { createError } from '../utils'
import { uploadImage } from './requests'
import { genImage } from './utils'
import { useClient } from '../fixtures'
import { usePlayerToken } from '../auth/request'

describe('Upload Image', () => {
    const client = useClient()
    const userAccessToken = usePlayerToken(client)
    const file = genImage()

    it('Should reject unauthenticated request', async () => { 
        const response = await uploadImage(client, { file }, undefined)
        if (response.uploadImage.__typename !== 'BaseError') {
            throw createError(response.uploadImage)
        }
        expect(response.uploadImage.status).toBe(ErrorStatus.NotAuthenticated)
    })

    it('Successful upload', async () => {
        const media = await uploadImage(client,  { file } , userAccessToken())
        if (media.uploadImage.__typename === 'BaseError') {
            throw createError(media.uploadImage)
        }
        expect(media.uploadImage.id).not.toBeNull()
        expect(media.uploadImage.path).not.toBeNull()
        expect(media.uploadImage.type).not.toBeNull()
    })
})
