export const UserQuery = `
    type Query {
        retrieveUser(id: ID!): UserOrBE!
    }
`;