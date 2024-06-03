// VARIABLES
const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const routes = require('express').Router();
const adminController = require('../controllers/admin.js');
const jwtSecret = process.env.SCRT_TKN;

// ADMIN TEST
routes.get('/test', adminController.testFn);

// REQUIRE USER ROUTE
routes.use('/user', require('./user.js'));

// EXPORTS
module.exports = routes;

// OLD
/* // PAGE PATHS
routes.get('/ask', async (req, res) => {
	try {
		res.render('ask.js');
	} catch (error) {
		console.log(error);
	}
});

// USERCONTROLLER RETRIEVAL
const {
	getAllUser,
	getUser,
	newUser,
	patchUser,
	delUser,
	loginUser,
} = require('../controllers/users');

// USERCONTROLLER CRUD
routes.route('/').get(getAllUser).post(newUser);
routes
	.route('/:id')
	.get(getUser)
	.patch(patchUser)
	.delete(delUser)
	.post(loginUser);

// USER PATHS
routes.get('/test', adminController.testFn);
routes.get('/all', userController.getAllUser);
routes.get('/:id', userController.getUser);
routes.post('/register', userController.newUser);
routes.patch('/:id', userController.patchUser);
routes.delete('/:id', userController.delUser);
routes.post('/:id', userController.loginUser); */
