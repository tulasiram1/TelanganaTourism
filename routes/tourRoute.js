const express = require('express')
const router = express.Router();
const tourController = require('./../controller/tourController')

router.get('/', tourController.index);
router.get('/AllTours/', tourController.getAllTours);
router.get('/getTopTwoRoutes/', tourController.getTopTwoRoutes);
router.get('/AllTours/:id', tourController.getTour);


module.exports = router;