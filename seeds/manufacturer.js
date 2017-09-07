
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('manufacturer').del()
    .then(function () {
      // Inserts seed entries
      return knex('manufacturer').insert([
        { name: "Frito Lay" },
        { name: "Mars" },
        { name: "Hostess" },
      ]);
    });
};
