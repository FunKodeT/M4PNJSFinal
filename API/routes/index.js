const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.js');
const userController = require('../controllers/pages.js');

// TEST ROUTES
router.get('/final', adminController.finalProof);
router.get('/test1', adminController.serverTest1);
router.get('/test2', adminController.serverTest2);
router.get('/predictions', adminController.getAllPredictions);

// PAGE ROUTES
router.get('/api/home', userController.getHomePage);
router.get('/api/about', userController.getAboutPage);
router.get('/api/contact', userController.getContactPage);
router.get('/api/ask', userController.getAskPage);
router.get('/api/answer', userController.getAnswerPage);
router.get('/api/signIn', userController.getSignInPage);
router.get('/api/register', userController.getRegisterPage);
router.get('/api/signOut', userController.getSignOutPage);

// ROUTES REQUIRED:
router.use('/predictions', require('./prediction.js'));

module.exports = router;
