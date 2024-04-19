export const UserMutations = `
    type Mutation {
        updateUser(data: UserInUpdate!): ErrorWithFields
    }
`;