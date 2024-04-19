export const SportQuery = `
    type Query {
        retrieveSport(id: ID!): SportOrBE!
        getSportPositions(sportID: ID!): PositionListOrBE!
    }
`;