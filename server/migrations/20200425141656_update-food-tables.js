
exports.up = function(knex) {
  return knex.schema.table('food', tbl => {
      tbl.string('img', 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropColumn('img');
};
