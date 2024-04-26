export const PlayerTypes = `
    type Player {
        id: ID!
        userID: ID!
        sport: Sport
        positions: [Position!]
        contact: PlayerContact!
        personal: PlayerPersonalInfo!
    }

    type PlayerContact {
        phone: String
        youtube: String
        facebook: String
        twitter: String
        instagram: String
    }

    type PlayerPersonalInfo {
        dateOfBirth: String
        gender: Gender
        nationality: UserNationalityOut
        height: String
        weight: String
        about: String
    }

    input PlayerIn {
        name: String!
        login: String!
        email: String!
        password: String!
    }

    input PlayerInUpdate {
        personal: PlayerPersonalInfoInUpdate
        contact: PlayerContactInUpdate
    }

    input PlayerContactInUpdate {
        phone: String
        youtube: String
        facebook: String
        twitter: String
        instagram: String
    }

    input UserNationalityIn {
    country: String!
    code: String!
    }

    type UserNationalityOut {
    country: String!
    code: String!
    }

    input PlayerPersonalInfoIn {
        dateOfBirth: String!
        gender: Gender!
        nationality: UserNationalityIn!
        height: String!
        weight: String!
        about: String!
    }

    input PlayerPersonalInfoInUpdate {
        height: String
        weight: String
        about: String
    }

    type PlayerList {
        total: Int!
        players: [Player!]!
    }

    union PlayerOrBE = Player | BaseError
    union PlayerListOrBE = PlayerList | BaseError

    extend type Mutation {
        createPlayer(input: PlayerIn!): AuthUserOrEWF!
        updatePlayer(data: PlayerInUpdate!): BaseError
        setPlayerSport(id: String!): BaseError
        updatePlayerContact(data: PlayerContactInUpdate!): BaseError
        updatePlayerPersonalInfo(data: PlayerPersonalInfoInUpdate!): BaseError
    }

    extend type Query {
        getPlayerMe: PlayerOrBE!
        retrievePlayer(id: ID!): PlayerOrBE!
        getPlayers(sportName: String, location: String, ageGroup: String, skip: Int! = 0, limit: Int! = 20): PlayerListOrBE!
    }
`;
