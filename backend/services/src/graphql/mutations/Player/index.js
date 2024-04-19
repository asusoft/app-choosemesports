export const PlayerMutations = `
    type Mutation {
        createPlayer(input: PlayerIn!): AuthUserOrEWF!
        updatePlayerContact(data: PlayerContactInUpdate): BaseError
        updatePlayerPersonalInfo(data: PlayerPersonalInfoIn): BaseError
    }
`;