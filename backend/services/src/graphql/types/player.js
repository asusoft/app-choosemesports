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
        phone: string
        youtube: string
        facebook: string
        twitter: string
        instagram: string
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
        sport: Sport!
        dob: String!
        location: string!
    }

    inuput PlayerContactInUpdate {
        phone: string
        youtube: string
        facebook: string
        twitter: string
        instagram: string
    }

    input PlayerPersonalInfoIn {
        height: String
        weight: String
        about: string
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
        getPlayers(sport: Sport, location: String, ageGroup: AgeGroup, skip: Int! = 0, limit: Int! = 20): PlayerListOrBE!
    }
`;
