const { gql } = require("apollo-server");

const typeDefs = gql`
  type Suplier {
    id: ID!
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
    addSuplier(suplier: String): [Suplier]
  }

`;

module.exports = typeDefs;