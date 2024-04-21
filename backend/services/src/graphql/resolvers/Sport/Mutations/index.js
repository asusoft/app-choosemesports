import { addSportUniqueFieldMutationResolver } from './add-sport-unique-field.js';
import { createPositionMutationResolver } from './create-position.js';
import { createSportMutationResolver } from './create-sport.js';

export const SportMutationResolvers = {
        createSport: createSportMutationResolver,
        createPosition: createPositionMutationResolver,
        addSportUniqueField: addSportUniqueFieldMutationResolver
};