const { gql } = require("apollo-server");

const stock = gql`
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

  input StockInput {
    material: MaterialInput
    trace: Int
    stock: Int
  }

  extend type Query {
    stock(_id: String): [Stock]
  }

  extend type Mutation {
    addStock(args: StockInput): Stock
  }
`;

module.exports = stock;
