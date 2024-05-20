const routes = require('express').Router();
const controller = require('../controllers/exIndex');

// EXAMPLE ROUTES
routes.get('/', controller.serverTest1);
routes.get('/test2', controller.serverTest2);
routes.get('/examples', controller.getAllExamples);

// ROUTES REQUIRED:
routes.use('/examples', require('./exExamples'));

module.exports = routes;
