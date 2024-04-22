export const SportQuery = `
    type Query {
        retrieveSport(id: ID!): SportOrBE!
        getSportPositions(sportID: ID!): PositionListOrBE!
        getSports(skip: String, limit: Int! = 20): SportListOrBE!
    }
`;