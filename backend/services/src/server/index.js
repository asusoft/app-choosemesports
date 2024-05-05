import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefs } from '../graphql/index.js';
import resolvers from '../graphql/resolvers/index.js';
import { getUserFromToken } from '../helpers/tokenization.js';
import { database } from '../../init-firebase.js';

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  '/',
  cors(),
  express.json({ limit: '50mb' }),
  expressMiddleware(server, {
    context: async ({ req }) => {
      const user = await getUserFromToken(req.headers.authorization, database)
      return {
        user,
        database
      }
    },
  }),
);


await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/`);

