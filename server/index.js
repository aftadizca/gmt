const { MongoClient } = require('mongodb');
const { ApolloServer} = require("apollo-server");
const {url, dbname, port} = require('./db/config')
const typeDefs = require('./schema/typedefs');
const r_gen = require('./schema/resolvers');

MongoClient.connect(url,(err, client)=>{
  if(err){
    console.error(err)
    return
  }
  console.log('Connected successfully to server')
  const resolvers = r_gen(client.db(dbname))
  // console.log(r)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  server
    .listen({
      port: process.env.PORT || port
    })
    .then(({ url }) => {
      console.log(`Server started at ${url}`);
    });
})