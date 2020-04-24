
exports.up = function(knex) {
  return knex.schema.createTable('food', tbl => {
      tbl.increments();

      // food name
      tbl.string('food', 255)
        .notNullable();

      //  safety boolean
      tbl.boolean('safe')
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('food');
};
