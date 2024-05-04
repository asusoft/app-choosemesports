export const VideoMutations = `
    type Mutation {
        postVideo(input: VideoIn): VideoOrBE!
        hideVideo(id: ID!): BaseError
        showVideo(id: ID!): BaseError
    }
`;