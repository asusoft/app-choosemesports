export const AdminTypes = `
    type Admin {
        id: ID!
        login: String!
    }

    type AuthAdmin {
        admin: Admin!
        token: String!
    }

    input AdminIn {
        password: String!
        login: String!
    }

    union AuthAdminOrEWF = AuthAdmin | ErrorWithFields
    union AuthAdminOrBE = AuthAdmin | BaseError
    union AdminOrBE = Admin | BaseError

    type Mutation {
        adminLogout(token: String!): BaseError
        changeAdminPassword(oldPassword: String!, newPassword: String!): ErrorWithFields
        adminLogin(input: AdminIn): AuthAdminOrBE!
        createAdmin(input: AdminIn): AuthAdminOrEWF!
    }

    type Query {
        getAdminMe: AdminOrBE!
    }
`;