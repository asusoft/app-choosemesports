import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from '../graphql/index.js';
import resolvers from '../graphql/resolvers/index.js';
import { getUserFromToken } from '../helpers/tokenization.js';
import { database } from '../../init-firebase.js';

const start = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true,
    });

    const corsOptions = {
      origin: 'http://localhost:8081',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
  };

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        cors: corsOptions,
        context: async ({ req }) => {
            const user = await getUserFromToken(req.headers.authorization, database)
            return {
              user,
              database
            }
          },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

start();
