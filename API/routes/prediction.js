const express = require('express');
const router = express.Router();
const PredictionsController = require('../controllers/index');

router.get('/', PredictionsController.getAllPredictions);
router.get('/:id', PredictionsController.getOnePrediction);
router.post('/', PredictionsController.newPrediction);
router.delete('/:id', PredictionsController.delPrediction);

module.exports = router;
