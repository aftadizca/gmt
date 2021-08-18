const resolvers = (db) => { 
  return ({
    Query: {
      suplier: async (obj, args, { userId }) => {
        return await db.collection('suplier').find(args).toArray();
      }
    },
    Mutation: {
      addSuplier: async (obj, {args}, { userId }) => {
        const newSuplier = await db.collection('suplier').insertOne(args);
        return newSuplier.ops;
      },
    },
  })
};

module.exports = resolvers;