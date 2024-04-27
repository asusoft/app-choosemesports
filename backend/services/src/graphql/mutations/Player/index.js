export const PlayerMutations = `
    extend type Mutation {
        createPlayer(input: PlayerIn!): AuthUserOrEWF!
        updatePlayer(data: PlayerInUpdate!): BaseError
        setPlayerSport(id: ID!): BaseError
        updatePlayerContact(data: PlayerContactInUpdate!): BaseError
        addPlayerAdditionalFields(data: PlayerAdditionalFieldsIn!): BaseError
        addPlayerPositions(data: PlayerPositionsIn!): BaseError
        updatePlayerPersonalInfo(data: PlayerPersonalInfoInUpdate!): BaseError
    }
`;