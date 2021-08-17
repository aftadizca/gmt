const resolvers = (db) => { 
  return ({
    Query: {
      supliers: async () => {
        try{
          const find = await db.collection('suplier').find().toArray();
          console.log(find)
          return find;
        }catch(e){
          console.log("e", e);
          return [];
        }
      },
      // games: async () => {
      //   try {
      //     const allGames = Game.find();
      //     return allGames;
      //   } catch (e) {
      //     console.log("e", e);
      //     return [];
      //   }
      // },
      // game: async (obj, { id }) => {
      //   console.log(id);
      //   try {
      //     const foundGame = await Game.findById(id);
      //     return foundGame;
      //   } catch (e) {
      //     console.log("e", e);
      //     return {};
      //   }
      // },
    },
    Mutation: {
      // addGame: async (obj, { game }, { userId }) => {
      //   try {
      //       const newGame = await Game.create({
      //       ...game,
      //   });
      //   return await Game.find({_id:newGame._id});

      //   } catch (e) {
      //     console.log("e", e);
      //   }
      // },
      addSuplier: async (obj, {input}, { userId }) => {
        console.log(input)
        try {
            const newSuplier = await db.collection('suplier').insertOne(input);
            console.log(newSuplier.ops)
          return newSuplier.ops;

        } catch (e) {
          console.log("e", e);
        }
      },
    },
  })
};

module.exports = resolvers;