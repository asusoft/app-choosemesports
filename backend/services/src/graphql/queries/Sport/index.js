export const SportQuery = `
    type Query {
        retrieveSport(id: ID!): SportOrBE!
        getSportPositions(sportID: ID!): PositionListOrBE!
        getSports(skip: Int! = 0, limit: Int! = 20): SportListOrBE!
    }
`;