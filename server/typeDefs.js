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

  type Game {
    id: ID!
    title: String!
    genre: Genre
    rating: Int
    status: Status
  }

  input GameInput {
    title: String!
    genre: String
    rating: Int
    status: Status
  }

  type Genre {
    id: ID
    name: String
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

  enum Status {
    UNSELECTED
    WANT_TO_PLAY
    PLAYED_IT
    BEAT_IT
  }

  type Query {
    supliers: [Suplier]
    games: [Game]
    game(id: ID): Game
  }

  type Mutation {
    addGame(game: GameInput): [Game]
    addSuplier(suplier: String): [Suplier]
  }

`;

module.exports = typeDefs;