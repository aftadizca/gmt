const { gql } = require("apollo-server");

const typeDefs = gql`
  type Suplier {
    _id: ID!
    name: String!
  } 
  
  input SuplierInput {
    _id: String!
    name: String!
  }


  type Material {
    _id: ID!,
    name : String!
    matetial_type : MaterialType!
    unit : Unit!
  }

  input MaterialInput {
    _id: String!,
    name : String!
    matetial_type : MaterialType!
    unit : Unit!
  }
 
  enum MaterialType{
    BAHAN_KEMAS
    BAHAN_BAKU
  }

  enum Unit{
    KG
    PCS
    PACK
    ROLL
  }

  type Query {
    suplier(_id:String, name:String): [Suplier]
  }

  type Mutation {
    addSuplier(args:SuplierInput): [Suplier]
    addMaterial(args:MaterialInput): [Material]
  }

`;

module.exports = typeDefs;