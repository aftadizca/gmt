const { ApolloServer} = require("apollo-server");
const mongoose = require("./db/config")
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connection.on("error", console.error.bind(console, "connection error:"));
mongoose.connection.once("open", function() {
  // were connected!
  console.log("✔️ Connected to MongoDB ✔️");
  server
    .listen({
      port: process.env.PORT || 4000
    })
    .then(({ url }) => {
      console.log(`Server started at ${url}`);
    });
});