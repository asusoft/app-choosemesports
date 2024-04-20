export const SportMutations = `
    type Mutation {
        createSport(input: SportIn!): SportOrBE!
        createPosition(input: PositionIn!): PositionOrBE!
        addSportUniqueField(input: UniqueFieldIn!): BaseError
    }
`;