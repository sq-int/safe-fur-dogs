/* connect to db */
const db = require('../../db/connect');

module.exports = {
    addFood,
    getFood,
    getFoodByName
}

/* add a food to the database */
function addFood(food) {
    return db('food').insert(food, 'id');
}

/* get a list of the food items in our database */
function getFood() {
    return db('food');
}

/* get a food by name */
function getFoodByName(food) {
    return db('food')
        .where('food', '=', food);
}