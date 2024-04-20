export const AuthQuery = `
    type Query {
        getMe: UserOrBE!
        isPhoneExist(phone: String!): BooleanObjectOrBE!
        isEmailExist(email: String!): BooleanObjectOrBE!
        isLoginExist(login: String!): BooleanObjectOrBE!
    }
`;