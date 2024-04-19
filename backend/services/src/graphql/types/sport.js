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
        positions: [PositionIn!]
    }
    
    type Position {
        id: ID!
        sportID: ID!
        name: String!
        stats: [StatField!]!
    }
    
    input PositionIn {
        name: String!
        stats: [StatFieldIn!]!
    }

    input StatFieldIn {
        field: String!
        value: String!
    }
    
    type PositionList {
        total: Int!
        positions: [Position!]!
    }
    
    type StatField {
        positionID: ID
        field: String!
        value: String!
    }
    
    
    type UniqueField {
        id: ID!
        sportID: ID!
        label: String!
        value: String!
    }
    
    union SportOrBE = Sport | BaseError
    union SportListOrBE = SportList | BaseError
    union PositionListOrBE = PositionList | BaseError
    
    extend type Mutation {
        createSport(input: SportIn!): SportOrBE!
    }
    
    extend type Query {
        getPlayerMe: PlayerOrBE!
        retrieveSport(id: ID!): SportOrBE!
        getSportPositions(sportID: ID!): PositionListOrBE!
    }
`