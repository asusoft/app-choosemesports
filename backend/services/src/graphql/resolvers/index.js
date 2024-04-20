import { FileMutationResolvers } from './File/Mutations/index.js';
import { FileCustomResolvers } from './File/index.js';
import { AuthMutationResolvers } from './Auth/Mutations/index.js';
import { AuthCustomResolvers } from './Auth/index.js';
import { AuthQueriesResolvers } from './Auth/Queries/index.js';
import { FileQueriesResolvers } from './File/Queries/index.js';
import { PlayerQueriesResolvers } from './Player/Queries/index.js';
import { PlayerMutationResolvers } from './Player/Mutations/index.js';
import { PlayerCustomResolvers } from './Player/index.js';
import { SportQueriesResolvers } from './Sport/Queries/index.js';
import { SportMutationResolvers } from './Sport/Mutations/index.js';
import { SportCustomResolvers } from './Sport/index.js';
import { UserQueriesResolvers } from './User/Queries/index.js';
import { UserMutationResolvers } from './User/Mutations/index.js';
import { UserCustomResolvers } from './User/index.js';
import { AdminMutationResolvers } from './Admin/Mutations/index.js';
import { AdminQueriesResolvers } from './Admin/Queries/index.js';
import { AdminCustomResolvers } from './Admin/index.js';

const resolvers = {
    Query: {
        ...AuthQueriesResolvers,
        ...FileQueriesResolvers,
        ...PlayerQueriesResolvers,
        ...SportQueriesResolvers,
        ...UserQueriesResolvers,
        ...AdminQueriesResolvers
    },
    Mutation: {
        ...AuthMutationResolvers,
        ...FileMutationResolvers,
        ...PlayerMutationResolvers,
        ...SportMutationResolvers,
        ...UserMutationResolvers,
        ...AdminMutationResolvers
    },
    ...AuthCustomResolvers,
    ...FileCustomResolvers,
    ...PlayerCustomResolvers,
    ...SportCustomResolvers,
    ...UserCustomResolvers,
    ...AdminCustomResolvers
};

export default resolvers;
