const routes = require('express').Router();
const adminController = require('../controllers/admin.js');
const userController = require('../controllers/pages.js');

// TEST ROUTES
routes.get('/final', adminController.finalProof);
routes.get('/test1', adminController.serverTest1);
routes.get('/test2', adminController.serverTest2);
routes.get('/predictions', adminController.getAllPredictions);

// PAGE ROUTES
routes.get('/', userController.homePage);
routes.get('/About', userController.aboutPage);
routes.get('/Contact', userController.contactPage);
routes.get('/Ask', userController.askPage);
routes.get('/Answer', userController.answerPage);
routes.get('/Sign_In', userController.signIn);
routes.get('/Register', userController.registerPage);
routes.get('/Sign_Out', userController.signOut);

// ROUTES REQUIRED:
routes.use('/predictions', require('./prediction.js'));

module.exports = routes;
