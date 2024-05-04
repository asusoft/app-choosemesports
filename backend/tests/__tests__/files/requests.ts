import {
    UploadImageDocument,
    UploadVideoDocument,
    RetrieveFileDocument
} from '../../generated/types/graphql'
import {  createGraphQLRequest } from '../utils'
import { createEnsureRequest, throwIfNotTypename } from '../utils/graphql-request'


export const uploadImage = createGraphQLRequest(UploadImageDocument)
export const uploadVideo = createGraphQLRequest(UploadVideoDocument)
export const retrieveFile = createGraphQLRequest(RetrieveFileDocument)

export const uploadImageAndEnsureOK = createEnsureRequest(
    uploadImage, 'uploadImage', throwIfNotTypename('File')
)
export const uploadVideoAndEnsureOK = createEnsureRequest(
    uploadVideo, 'uploadVideo', throwIfNotTypename('File')
)
