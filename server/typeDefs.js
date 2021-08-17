const { gql } = require("apollo-server");

const typeDefs = gql`
  type Suplier {
    _id: ID!
    name: String!
  } 
  
  input SuplierInput {
    _id: String
    name: String!
  }


  type Material {
    id: ID!,
    name : String!
    matetial_type : MaterialType
    unit : Unit
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
    supliers: [Suplier]
  }

  type Mutation {
    addSuplier(input:SuplierInput): [Suplier]
  }

`;

module.exports = typeDefs;