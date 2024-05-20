const express = require('express');
const router = express.Router();
const ExamplesController = require('../controllers/exIndex');

router.get('/', ExamplesController.getAllExamples);
router.get('/:id', ExamplesController.getOneExamples);
router.post('/', ExamplesController.newExamples);
router.patch('/:id', ExamplesController.patchExamples);
router.delete('/:id', ExamplesController.delExamples);

module.exports = router;
