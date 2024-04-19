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
    name: string!
    login: string!
    email: string!
    role: ERole!
    gender: Gender!
    avatar: File
    bio: string
    location: string!
  }

  input UserInUpdate {
    login: string
    email: string
    avatar: File
    bio: string
  }

  union UserOrBE = User | BaseError

  extend type Mutation {
    updateUser(data: UserInUpdate!): ErrorWithFields
  }

  extend type Query {
    retrieveUser(id: ID!): UserOrBE!
  }
`;