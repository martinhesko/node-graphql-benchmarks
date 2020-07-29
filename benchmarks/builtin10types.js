const knex = require('knex');
const { migrateDB } = require('graphql-migrations');
const { ModelDefinition } = require('@graphback/core');
const { buildGraphbackAPI } = require('graphback');
const { SQLiteKnexDBDataProvider } = require('@graphback/runtime-knex');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { genSchema } = require("../lib/genSchema.js");
const http = require('http');
const fs = require('fs');
async function start() {

const app = express();

try {
  fs.unlinkSync('./users.sqlite')
  //file removed
} catch(err) {
  console.error(err)
}

const dbConfig = {
    client: "sqlite3",
    connection: {
      filename: "./users.sqlite"
    }
};

const db = knex(dbConfig);

const userModel = genSchema(5);

migrateDB(dbConfig, userModel, { }).then(() => {
  console.log("Migrated database");
});

// create the SQLite data provider
const dataProviderCreator = (model) => new SQLiteKnexDBDataProvider(model.graphqlType, db);


// Use the dataProvider in buildGraphbackAPI
const { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(userModel, { dataProviderCreator });

 const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: contextCreator
  })

  apolloServer.applyMiddleware({ app })

  const httpServer = http.createServer(app)
  apolloServer.installSubscriptionHandlers(httpServer)

  httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready at http://localhost:4000/graphql`)
  })
}

start().catch((err) => console.log(err))
