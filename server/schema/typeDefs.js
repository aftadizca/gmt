const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar DateTime

  type Suplier {
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime
    name: String!
  } 
  
  input SuplierInput {
    _id: String!
    name: String!
  }


  type Material {
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime
    name : String!
    materialType : MaterialTypeEnum!
    unit : UnitEnum!
  }

  input MaterialInput {
    _id: ID!
    name : String!
    materialType : MaterialTypeEnum!
    unit : UnitEnum!
  }

  type Stock {
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime
    material: Material
    trace: Int
    suplier: Suplier
    location: String
    stock: Int
    stockOut: Int
    active: Boolean
  }

  input StockInput{
    material: MaterialInput
    trace: Int
    stock: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  type StockTransfer{
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime
    stock: [StockOut]
    active: Boolean
  }

  type StockOut{
    stock:Stock
    stockOut:Int
  }
  
  enum UnitEnum {
    KG
    PCS
    PACK
    ROLL
  }

  enum MaterialTypeEnum {
    PACKAGING
    RAW
  }

  type Query {
    suplier(_id:String): [Suplier]
    material(_id:String): [Material]
    stock(_id:String): [Stock]
  }

  type Mutation {
    addSuplier(args:SuplierInput): Suplier
    addMaterial(args:MaterialInput): Material
    addStock(args:StockInput): Stock
  }

`;

module.exports = typeDefs;