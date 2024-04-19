import {
    UploadImageDocument,
    UploadVideoDocument,
    UploadAudioDocument,
    RetrieveFileDocument
} from '../../generated/types/graphql'
import {  createGraphQLRequest } from '../utils'
import { createEnsureRequest, throwIfNotTypename } from '../utils/graphql-request'

export const uploadAudio = createGraphQLRequest(UploadAudioDocument)
export const uploadImage = createGraphQLRequest(UploadImageDocument)
export const uploadVideo = createGraphQLRequest(UploadVideoDocument)
export const retrieveFile = createGraphQLRequest(RetrieveFileDocument)

export const uploadImageAndEnsureOK = createEnsureRequest(
    uploadImage, 'uploadImage', throwIfNotTypename('File')
)
export const uploadVideoAndEnsureOK = createEnsureRequest(
    uploadVideo, 'uploadVideo', throwIfNotTypename('File')
)

export const uploadAudioAndEnsureOK = createEnsureRequest(
    uploadAudio, 'uploadAudio', throwIfNotTypename('File')
)