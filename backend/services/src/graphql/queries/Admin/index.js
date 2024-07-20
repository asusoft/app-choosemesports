export const AdminQuery = `
    type Query {
        getAdminMe: AdminOrBE!
        getVideoRequests(
            skip: Int! = 0,
            limit: Int! = 20
    ): VideoRequestListOrBE!
    retrieveVideoRequest(id: ID!): VideoRequestOrBE!
}
`;

