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

    const foodQuery = req.params.name.toLowerCase();

    Food.getFoodByName(foodQuery)
        .then(found => {
            console.log('WHAT IS EVEN COMING BACK HERE ', found);
            if(found.length) {
                res.status(200).json(found);
            }
            else {
                res.status(400).json({ error: 'That food could not be found in the database.' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Something went wrong on our end.' });
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