const { gql } = require("apollo-server");

const suplier = gql`
  type Suplier {
    _id: ID!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime
  }

  input SuplierInput {
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
