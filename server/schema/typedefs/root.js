const { gql } = require("apollo-server");

const root = gql`
  scalar DateTime

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

module.exports = root;
