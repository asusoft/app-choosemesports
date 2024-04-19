import { types } from './types/index.js'
import { mutations } from './mutations/index.js';
import { queries } from './queries/index.js';

export const typeDefs = `#graphql
    ${queries}
    ${mutations}
    ${types}
`;
