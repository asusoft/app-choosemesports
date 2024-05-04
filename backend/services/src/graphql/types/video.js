export const VideoTypes = `
    type Video {
        id: ID!
        author: User!
        attachement: File!
        description: String
        isApproved: Boolean!
        showInProfile: Boolean!
    }

    input VideoIn {
        videoID: String!
        description: String
    }

    type VideoList {
        total: Int!
        videos: [Video!]!
    }

    union VideoOrBE = Video | BaseError
    union VideoListOrBE = VideoList | BaseError

    type Mutation {
        postVideo(input: VideoIn): VideoOrBE!
        hideVideo(id: ID!): BaseError
        showVideo(id: ID!): BaseError
    }

    type Query {
        retrieveVideo(id: ID!): VideoOrBE!
        getMyVideos: VideoListOrBE!
        getVideosByPlayerId(
            id: ID!,
            skip: Int! = 0,
            limit: Int! = 20
        ): VideoListOrBE!
    }
`;
