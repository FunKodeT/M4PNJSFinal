const routes = require('express').Router();
const controller = require('../controllers/index');

// EXAMPLE ROUTES
routes.get('/', controller.finalProof);
routes.get('/test1', controller.serverTest1);
routes.get('/test2', controller.serverTest2);
routes.get('/predictions', controller.getAllPredictions);

// ROUTES REQUIRED:
routes.use('/predictions', require('./prediction.js'));

module.exports = routes;
