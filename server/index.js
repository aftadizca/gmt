const { MongoClient } = require('mongodb');
const { ApolloServer} = require("apollo-server");
const typeDefs = require('./typeDefs');
const r_gen = require('./resolvers');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err, client)=>{
  if(err){
    console.error(err)
    return
  }
  console.log('Connected successfully to server')
  const resolvers = r_gen(client.db('gmt'))
  // console.log(r)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  server
    .listen({
      port: process.env.PORT || 4000
    })
    .then(({ url }) => {
      console.log(`Server started at ${url}`);
    });
})


// mongoose.connection.on("error", console.error.bind(console, "connection error:"));
// mongoose.connection.once("open", function() {
//   // were connected!
//   console.log("✔️ Connected to MongoDB ✔️");
//   server
//     .listen({
//       port: process.env.PORT || 4000
//     })
//     .then(({ url }) => {
//       console.log(`Server started at ${url}`);
//     });
// });