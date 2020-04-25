const express = require('express');

const router = express.Router();

/* bring in food model */
const Food = require('./model');

/* endpoints */

/* get a list of our food in the database */
router.get('/', (req, res) => {
    Food.getFood()
        .then(food => {
            res.status(200).json(food);
        })
        .catch(err => {
            res.status(400).json({ error: 'We could not retrieve the list of food.' });
        })
});

/* get a food by its name */
router.get('/:name', (req, res) => {

    const foodQuery = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1);
    console.log(foodQuery);

    Food.getFoodByName(foodQuery)
        .then(found => {
            res.status(200).json(found);
        })
        .catch(err => {
            res.status(404).json({ error: 'That food could not be found.' });
        })
});

/* add a food to the database */
router.post('/', (req, res) => {

    const newFood = req.body;

    Food.addFood(newFood)
        .then(created => {
            res.status(201).json({ success: 'Food added.', id: created[0], ...newFood })
        })
        .catch(err => {
            res.status(400).json({ error: 'That food could not be added.' })
        })
});

module.exports = router;