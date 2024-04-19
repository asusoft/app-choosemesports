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
    
    type SportIn {
        name: String!
        positions: [PositionIn!]
    }
    
    type Position {
        id: ID!
        sportID: ID!
        name: String!
        stats: [StatField!]!
    }
    
    type PositionIn {
        name: String!
        stats: [StatField!]!
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