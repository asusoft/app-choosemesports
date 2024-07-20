export const AdminMutations = `
    type Mutation {
        adminLogout(token: String!): BaseError
        changeAdminPassword(oldPassword: String!, newPassword: String!): ErrorWithFields
        adminLogin(input: AdminIn): AuthAdminOrBE!
        createAdmin(input: AdminIn): AuthAdminOrEWF!
        rejectVideo(input: RejectionIn!): BaseError
        acceptVideo(requestID: ID!): BaseError
    }
`;