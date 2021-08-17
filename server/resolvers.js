const Game = require('./models/game');
const Suplier = require('./models/suplier');

const resolvers = {
    Query: {
      supliers: async () => {
        try{
          return Suplier.find();
        }catch(e){
          console.log("e", e);
          return [];
        }
      },
      games: async () => {
        try {
          const allGames = Game.find();
          return allGames;
        } catch (e) {
          console.log("e", e);
          return [];
        }
      },
      game: async (obj, { id }) => {
        console.log(id);
        try {
          const foundGame = await Game.findById(id);
          return foundGame;
        } catch (e) {
          console.log("e", e);
          return {};
        }
      },
    },
    Mutation: {
      addGame: async (obj, { game }, { userId }) => {
        try {
            const newGame = await Game.create({
            ...game,
        });
        return await Game.find({_id:newGame._id});

        } catch (e) {
          console.log("e", e);
        }
      },
      addSuplier: async (obj, {suplier}, { userId }) => {
        console.log(suplier)
        try {
            const newSuplier = await Suplier.create({
            name : suplier
          });
          return await Suplier.find({_id:newSuplier._id});

        } catch (e) {
          console.log("e", e);
        }
      },
    },
  };

module.exports = resolvers;