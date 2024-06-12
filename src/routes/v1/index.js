const express = require('express');
const CityController = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.get('/city', CityController.getCityByName);

module.exports = router;