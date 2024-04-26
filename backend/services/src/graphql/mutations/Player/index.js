export const PlayerMutations = `
    extend type Mutation {
        createPlayer(input: PlayerIn!): AuthUserOrEWF!
        updatePlayer(data: PlayerInUpdate!): BaseError
        setPlayerSport(id: String!): BaseError
        updatePlayerContact(data: PlayerContactInUpdate!): BaseError
        updatePlayerPersonalInfo(data: PlayerPersonalInfoInUpdate!): BaseError
    }
`;