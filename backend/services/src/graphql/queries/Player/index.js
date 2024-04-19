export const PlayerQuery = `
    type Query {
        getPlayerMe: PlayerOrBE!
        retrievePlayer(id: ID!): PlayerOrBE!
        getPlayers(sportName: String, location: String, ageGroup: AgeGroup, skip: Int! = 0, limit: Int! = 20): PlayerListOrBE!
    }
`;