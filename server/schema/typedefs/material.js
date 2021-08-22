const { gql } = require("apollo-server");

const material = gql`
  type Material {
    _id: ID!
    createdAt: DateTime
    updatedAt: DateTime
    name: String!
    materialType: MaterialTypeEnum!
    unit: UnitEnum!
  }

  input MaterialInput {
    # _id: ID!
    name: String!
    materialType: MaterialTypeEnum!
    unit: UnitEnum!
  }
  input MaterialUpdate {
    _id: ID!
    name: String
    materialType: MaterialTypeEnum
    unit: UnitEnum
  }
  input MaterialDelete {
    _id: [ID!]!
  }

  extend type Query {
    material(_id: ID): [Material]
  }

  extend type Mutation {
    addMaterial(args: MaterialInput): Material
    updateMaterial(args: MaterialUpdate): Message
    deleteMaterial(args: MaterialDelete): Message
  }
`;

module.exports = material;
