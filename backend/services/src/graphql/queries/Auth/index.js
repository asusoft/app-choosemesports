export const AuthQuery = `
    type Query {
        isPhoneExist(phone: String!): BooleanObjectOrBE!
        isEmailExist(email: String!): BooleanObjectOrBE!
        isLoginExist(login: String!): BooleanObjectOrBE!
    }
`;