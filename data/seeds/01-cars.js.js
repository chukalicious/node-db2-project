exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          make: "Honda",
          model: "CR-V",
          VIN: "agdshrtgffibekw6675859375960704873",
        },
        {
          id: 2,
          make: "Honda",
          model: "Fit",
          VIN: "yqg4pytbg2308y5bgt20yb5g2y5bg",
        },
        {
          id: 3,
          make: "Nissan",
          model: "Sentra",
          VIN: "hgbhbgthg76879thrhi9tjrherooy",
        },
      ]);
    });
};
