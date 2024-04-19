export const UserType = `
  enum ERole {
    PLAYER
    SCOUT
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type User {
    id: ID!
    name: String!
    login: String!
    email: String!
    role: ERole!
    gender: Gender!
    avatar: File
    bio: String
    location: String!
  }

  input UserInUpdate {
    login: String
    email: String
    bio: String
  }

  union UserOrBE = User | BaseError

  extend type Mutation {
    updateUser(data: UserInUpdate!): ErrorWithFields
  }

  extend type Query {
    retrieveUser(id: ID!): UserOrBE!
  }
`;