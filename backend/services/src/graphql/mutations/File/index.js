export const FileMutations = `
    type Mutation {
        uploadImage(file: Upload!): UploadFileResponse!
        uploadVideo(file: Upload!): UploadFileResponse!
    }
`;