exports.up = function (knex) {
  return knex.schema
    .createTable("cars", (tbl) => {
      tbl.increments();
      tbl.text("make", 128).notNullable();
      tbl.text("model", 128).notNullable();
      tbl.text("VIN").notNullable().unique();
    })
    .createTable("more-info", (tbl) => {
      //have to create foreign key here
      tbl.increments();
      tbl.text("transmission", 128);
      tbl.text("title-status").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars").dropTableIfExists("more-info");
};
