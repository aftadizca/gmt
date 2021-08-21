const { gql } = require("apollo-server");

const suplier = gql`
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

  extend type Query {
    suplier(_id: String): [Suplier]
  }

  extend type Mutation {
    addSuplier(args: SuplierInput): Suplier
  }
`;

module.exports = suplier;
