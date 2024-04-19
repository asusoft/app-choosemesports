export const AuthTypes = `
    type AuthUser {
        user: User!
        token: String!
    }

    input LogInInput {
        password: String!
        login: String!
    }

    union AuthUserOrEWF = AuthUser | ErrorWithFields
    union AuthUserOrBE = AuthUser | BaseError

    type Mutation {
        logout(token: String!): BaseError
        changePassword(oldPassword: String!, newPassword: String!): ErrorWithFields
        login(input: LogInInput): AuthUserOrBE!
    }

    type Query {
        isPhoneExist(phone: String!): BooleanObjectOrBE!
        isEmailExist(email: String!): BooleanObjectOrBE!
        isLoginExist(login: String!): BooleanObjectOrBE!
    }
`;