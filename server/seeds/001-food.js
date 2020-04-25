
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {
          food: 'Chocolate',
          safe: false,
          img: 'assets/Chocolate.svg'
        },
        {
          food: 'Chicken',
          safe: true,
          img: 'assets/Chicken.svg'
        },
        {
          food: 'Eggs',
          safe: true,
          img: 'assets/Eggs.svg'
        }
      ]);
    });
};
