export const PlayerMutations = `
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
`;