const { gql } = require("apollo-server");

const enums = gql`
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

  enum StatusEnum {
    Ok
    Error
  }
`;

module.exports = enums;
