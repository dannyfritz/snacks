
exports.up = function(knex, Promise) {
  return knex.schema.createTable("snack", function (table) {
    table.text("name").primary()
    table.integer("tastiness")
    table.integer("mouthfeel")
    table.text("manufacturer_name")
      .references("manufacturer.name")
      .onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("snack")
};
