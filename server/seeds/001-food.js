
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {
          food: 'chocolate',
          safe: false,
          img: 'http://safefurdogs.com/img/chocolate.svg',
          summary: 'This is an example summary. It can be changed.',
          resources: []
        },
        {
          food: 'chicken',
          safe: true,
          img: 'http://safefurdogs.com/img/chicken.svg',
          summary: 'This is an example summary. It can be changed.',
          resources: []
        },
        {
          food: 'eggs',
          safe: true,
          img: 'http://safefurdogs.com/img/eggs.svg',
          summary: 'This is an example summary. It can be changed.',
          resources: []
        },
        {
          food: 'grapes',
          safe: false,
          img: 'http://safefurdogs.com/img/grapes.svg',
          summary: 'This is an example summary. It can be changed.',
          resources: []
        }
      ]);
    });
};
