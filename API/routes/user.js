const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/user');
const jwtSecret = process.env.SCRT_TKN;

routes.get('/', userController.getAllUser);
routes.get('/:id', userController.getUser);
routes.post('/', userController.newUser);
routes.put('/:id', userController.editUser);
routes.delete('/:id', userController.delUser);
routes.post('/lgn/:id', userController.lgnUser);

module.exports = routes;
