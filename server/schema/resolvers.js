const { DateTimeResolver } = require("graphql-scalars");
const { dateScalar } = require("./scalars");
const { ObjectId } = require("mongodb");

const addSingleMutation = async (db, collections, args) => {
  const input = { createdAt: new Date(), ...args };
  const newEntry = await db.collection(collections).insertOne(input);
  return { _id: newEntry.insertedId, ...input };
};

const updateSingleMutation = async (db, collections, args) => {
  const { _id, ...rest } = args;
  const input = { updatedAt: new Date(), ...rest };
  const update = await db
    .collection(collections)
    .updateOne({ _id: new ObjectId(_id) }, { $set: { ...input } });
  console.log(update);
  if (update.modifiedCount === 0) {
    throw "Could not find document";
  }
  return null;
  // return { _id: newEntry.insertedId, ...input };
};

const resolvers = (db) => {
  return {
    DateTime: DateTimeResolver,
    Query: {
      suplier: async (obj, args, { userId }) => {
        return await db.collection("suplier").find(args).toArray();
      },
      material: async (obj, args, { userId }) => {
        return await db.collection("material").find(args).toArray();
      },
      stock: async (obj, args, { userId }) => {
        return await db.collection("stock").find(args).toArray();
      },
    },
    Mutation: {
      addSuplier: async (obj, { args }, { userId }) => {
        return addSingleMutation(db, "suplier", args);
      },
      addMaterial: async (obj, { args }, { userId }) => {
        return addSingleMutation(db, "material", args);
      },
      updateMaterial: async (obj, { args }, { userId }) => {
        return updateSingleMutation(db, "material", args);
      },
      addStock: async (obj, { args }, { userId }) => {
        return addSingleMutation(db, "stock", args);
      },
    },
  };
};

module.exports = resolvers;
