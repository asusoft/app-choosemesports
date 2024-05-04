export const VideoQuery = `
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