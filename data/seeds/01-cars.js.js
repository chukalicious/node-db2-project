exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, make: "Honda", model: "CR-V", mileage: "200,000" },
        { id: 2, make: "Honda", model: "Fit", mileage: "6,000" },
        { id: 3, make: "Nissan", model: "Sentra", mileage: "250,999" },
      ]);
    });
};
