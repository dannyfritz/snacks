
exports.up = function(knex, Promise) {
  return knex.schema.createTable("manufacturer", function (table) {
    table.text("name").primary()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("manufacturer")
};
