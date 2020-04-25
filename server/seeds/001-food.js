
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {
          food: 'Chocolate',
          safe: false
        },
        {
          food: 'Chicken',
          safe: true
        }
      ]);
    });
};
