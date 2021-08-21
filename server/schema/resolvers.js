const {DateTimeResolver} = require('graphql-scalars')

const resolvers = (db) => { 
  return ({
    DateTime: DateTimeResolver,
    Query: {
      suplier: async (obj, args, { userId }) => {
        return await db.collection('suplier').find(args).toArray();
      },
      material: async (obj, args, { userId }) => {
        return await db.collection('material').find(args).toArray();
      },
      stock: async (obj, args, { userId }) => {
        return await db.collection('stock').find(args).toArray();
      }
    },
    Mutation: {
      addSuplier: async (obj, {args}, { userId }) => { 
        const input = {createdAt : new Date(),...args}
        const newEntry = await db.collection('suplier').insertOne(input);
        return {_id: newEntry.insertedId, ...input};
      },
      addMaterial: async (obj, {args}, { userId }) => {
        const input = {createdAt : new Date(),...args}
        const newEntry = await db.collection('material').insertOne(input);
        return {_id: newEntry.insertedId, ...input};
      },
      addStock: async (obj, {args}, { userId }) => {
        const input = {createdAt : new Date(),...args}
        const newEntry = await db.collection('stock').insertOne(input);
        return {"_id": newEntry.insertedId, ...input};
      },
    },
  })
};

module.exports = resolvers;