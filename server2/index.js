const { ApolloServer} = require("apollo-server");
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const server = new ApolloServer({ typeDefs, resolvers });

// db.on("error", console.error.bind(console, "connection error:"));
// db.on("connection", function() {
  // were connected!
console.log("✔️ Connected to MongoDB ✔️");
server
  .listen({
    port: process.env.PORT || 4000
  })
  .then(({ url }) => {
    console.log(`Server started at ${url}`);
  });