export const AuthMutations = `
    type Mutation {
        logout(token: String!): BaseError
        changePassword(oldPassword: String!, newPassword: String!): ErrorWithFields
        login(input: LogInInput): AuthUserOrBE!
    }
`;