export const PlayerTypes = `
    type Player {
        id: ID!
        userID: ID!
        sport: Sport!
        positions: [Position!]
        dob: String!
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
        height: String!
        weight: String!
        about: String!
    }

    input PlayerIn {
        name: String!
        login: String!
        email: String!
        sportID: String!
        dob: String!
        location: String!
    }

    input PlayerContactInUpdate {
        phone: String
        youtube: String
        facebook: String
        twitter: String
        instagram: String
    }

    input PlayerPersonalInfoIn {
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
        updatePlayerContact(data: PlayerContactInUpdate): BaseError
        updatePlayerPersonalInfo(data: PlayerPersonalInfoIn): BaseError
    }

    extend type Query {
        getPlayerMe: PlayerOrBE!
        retrievePlayer(id: ID!): PlayerOrBE!
        getPlayers(sportName: String, location: String, ageGroup: String, skip: Int! = 0, limit: Int! = 20): PlayerListOrBE!
    }
`;
