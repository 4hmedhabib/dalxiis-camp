import env from "dotenv";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import http from "http";

import { resolvers, typeDefs } from "./graphql";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";

env.config();

const appGetStart = async () => {
  const PORT = process.env.PORT;
  const app = express();

  // middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.disable("x-powered-by");

  // http server
  const httpServer = http.createServer(app);

  // server init
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
  httpServer.listen(PORT, () => {
    console.log(`@ SERVER RUNNING PORT : ${PORT}`);
  });
};

export default { appGetStart };
