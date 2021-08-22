const { gql } = require("apollo-server");

const root = gql`
  scalar DateTime

  type Message {
    status: StatusEnum
    msg: String
  }

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

module.exports = root;
