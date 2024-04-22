export const SportTypes = `
    type Sport {
        id: ID!
        name: String!
        uniqueFields: [UniqueField!]
        positions: PositionList
    }

    type SportList {
        total: Int!
        sports: [Sport!]!
    }

    input SportIn {
        name: String!
    }

    type Position {
        id: ID!
        name: String!
        sportID: String!
        stats: [Stat!]!
    }

    input PositionIn {
        sportID: String!
        name: String!
        stats: [StatIn!]!
    }
    
    input StatIn {
        name: String!
    }

    type PositionList {
        total: Int!
        positions: [Position!]!
    }

    type Stat {
        name: String!
    }

    type UniqueField {
        id: ID!
        sportID: ID!
        label: String!
    }

    input UniqueFieldIn {
        label: String!
        sportID: String!
    }

    union SportOrBE = Sport | BaseError
    union SportListOrBE = SportList | BaseError
    union PositionOrBE = Position | BaseError
    union PositionListOrBE = PositionList | BaseError

    extend type Mutation {
        createSport(input: SportIn!): SportOrBE!
        createPosition(input: PositionIn!): PositionOrBE!
        addSportUniqueField(input: UniqueFieldIn!): BaseError
    }

    extend type Query {
        getPlayerMe: PlayerOrBE!
        retrieveSport(id: ID!): SportOrBE!
        getSportPositions(sportID: ID!): PositionListOrBE!
        getSports(skip: Int! = 0, limit: Int! = 20): SportListOrBE!
    }
`