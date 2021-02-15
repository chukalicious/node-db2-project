const knex = require("knex");
const config = require("../knexfile");

const db = knex(config.development);

module.exports = {
  get,
  add,
};

function get() {
  return db("cars");
}

function add(car) {
  db("cars")
    .insert(car)
    .then((id) => res.status(201).json({ data: id[0] }))
    .catch((err) =>
      res
        .status(500)
        .json({ message: "could not add car to the dealership at this moment" })
    );
}
