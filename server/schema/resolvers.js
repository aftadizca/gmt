const { DateTimeResolver } = require("graphql-scalars");
const { ObjectId } = require("mongodb");

const addSingleDocument = async (db, collections, args) => {
  const input = { createdAt: new Date(), ...args };
  const newEntry = await db.collection(collections).insertOne(input);
  return { _id: newEntry.insertedId, ...input };
};

const updateSingleDocument = async (db, collections, args) => {
  const { _id, ...rest } = args;
  const input = { updatedAt: new Date(), ...rest };
  const update = await db
    .collection(collections)
    .updateOne({ _id: new ObjectId(_id) }, { $set: { ...input } });
  if (update.modifiedCount === 0) {
    return { status: "Error", msg: "Cant find document" };
  }
  return { status: "Ok" };
};

const deleteMultipleDocument = async (db, collections, args) => {
  const params = args._id.map((x) => {
    return ObjectId(x);
  });
  const del = await db
    .collection(collections)
    .deleteMany({ _id: { $in: params } });
  return { status: "Ok", msg: `Deleted ${del.deletedCount} record` };
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
      //Add
      addSuplier: (obj, { args }, { userId }) => {
        return addSingleDocument(db, "suplier", args);
      },
      addMaterial: (obj, { args }, { userId }) => {
        return addSingleDocument(db, "material", args);
      },
      addStock: (obj, { args }, { userId }) => {
        return addSingleDocument(db, "stock", args);
      },
      // Update
      updateMaterial: (obj, { args }, { userId }) => {
        return updateSingleDocument(db, "material", args);
      },
      deleteMaterial: (obj, { args }, { userId }) => {
        return deleteMultipleDocument(db, "material", args);
      },
    },
  };
};

module.exports = resolvers;
