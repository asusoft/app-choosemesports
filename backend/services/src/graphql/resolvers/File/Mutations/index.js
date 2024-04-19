import { uploadImageResolver } from './upload-image.js';
import { uploadVideoResolver } from './upload-video.js';

export const FileMutationResolvers = {
        uploadImage: uploadImageResolver,
        uploadVideo: uploadVideoResolver
};