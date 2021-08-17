const configuration = require('./db/knexfile')['development'];   
const db = require('knex')(configuration);

const resolvers = {
    Query: {
      supliers: async () => {
        try{
          return db.select('*').from('supliers');
        }catch(e){
          console.log("e", e);
          return [];
        }
      },
    },
    Mutation: {
      addSuplier: async (obj, {suplier}, { userId }) => {
        console.log(suplier)
        try{
          const newSuplier = await db('supliers').returning(['id','name']).insert({name : suplier });
          console.log(newSuplier);
          return newSuplier;
          // return await Suplier.find({_id:newSuplier._id});

        } catch (e) {
          console.log("e", e);
        }
      },
    },
  };

module.exports = resolvers;