
exports.up = function(knex) {
  return knex.schema.createTable('supliers', function (table) {
    table.uuid('id').primary();
    table.string('name',255).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("supliers")
};
