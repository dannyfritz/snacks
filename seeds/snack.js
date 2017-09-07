
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snack').del()
    .then(function () {
      // Inserts seed entries
      return knex('snack').insert([
        {
          name: "Flaming Hot Cheetos",
          tastiness: 8,
          mouthfeel: 5,
          manufacturer_name: "Frito Lay",
        },
        {
          name: "Ho Hos",
          tastiness: 10,
          mouthfeel: 10,
          manufacturer_name: "Hostess",
        },
      ]);
    });
};
