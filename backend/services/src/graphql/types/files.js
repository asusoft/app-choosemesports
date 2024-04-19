export const FilesType = `
    type File {
        id: ID!
        createdAt: String!
        updatedAt: String!
        name: String
        path: String!
        type: String!
        checksum: String
        size: Int
    }

    union UploadFileResponse = File | BaseError
    union RetrieveFileResponse = File | BaseError

    extend type Query {
        retrieveFile(id: ID!): RetrieveFileResponse!
    }

    extend type Mutation {
        uploadImage(file: Upload!): UploadFileResponse!
        uploadVideo(file: Upload!): UploadFileResponse!
    }
`;
