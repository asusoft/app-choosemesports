export const PlayerTypes = `
    type Player {
        id: ID!
        userID: ID!
        sport: Sport
        playerPositions: [PlayerPosition!]
        contact: PlayerContact!
        personal: PlayerPersonalInfo!
        additionalFields: [PlayerAdditionalField!]
    }

    type AuthPlayer {
        id: ID!
        userID: ID!
        sport: Sport
        playerPositions: [PlayerPosition!]
        contact: PlayerContact!
        personal: PlayerPersonalInfo!
        name: String!
        login: String!
        email: String!
        role: ERole!
        avatar: File
        bio: String
        additionalFields: [PlayerAdditionalField!]
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

    type PlayerAdditionalField {
        label: String!
        value: String!
    }

    input PlayerAdditionalFieldIn {
        label: String!
        value: String!
    }

    input PlayerAdditionalFieldsIn {
        fields: [PlayerAdditionalFieldIn!]!
    }


    type PlayerPosition {
        name: String!
        stats: [PlayerPosStat!]!
    }

    type PlayerPosStat {
        label: String!
        value: String!
    }

    input PlayerPositionIn {
        name: String!
        stats: [PlayerPosStatIn!]!
    }

    input PlayerPositionsIn {
        positions: [PlayerPositionIn!]!
    }

    input PlayerPosStatIn {
        label: String!
        value: String!
    }

    union PlayerOrBE = Player | BaseError
    union PlayerListOrBE = PlayerList | BaseError

    extend type Mutation {
        createPlayer(input: PlayerIn!): AuthUserOrEWF!
        updatePlayer(data: PlayerInUpdate!): BaseError
        setPlayerSport(id: ID!): BaseError
        updatePlayerContact(data: PlayerContactInUpdate!): BaseError
        addPlayerAdditionalFields(data: PlayerAdditionalFieldsIn!): BaseError
        addPlayerPositions(data: PlayerPositionsIn!): BaseError
        addPlayerPersonalInfo(data: PlayerPersonalInfoIn!): BaseError
        updatePlayerPersonalInfo(data: PlayerPersonalInfoInUpdate!): BaseError
    }

    extend type Query {
        getPlayerMe: PlayerOrBE!
        retrievePlayer(id: ID!): PlayerOrBE!
        getPlayers(sportName: String, location: String, ageGroup: String, skip: Int! = 0, limit: Int! = 20): PlayerListOrBE!
    }
`;
