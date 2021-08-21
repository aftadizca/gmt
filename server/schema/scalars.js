const { GraphQLScalarType } = require("graphql/type");

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    // console.log("serialize", value);
    return new Date(value); // Convert outgoing Date to integer for JSON
  },
  parseValue() {
    // console.log("parse");
    return new Date().getTime(); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    // console.log("literal");
    return new Date().getTime(); // Invalid hard-coded value (not an integer)
  },
});

module.exports = { dateScalar };
