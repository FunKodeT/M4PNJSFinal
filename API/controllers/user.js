// UTILITY RETRIEVAL
// const bcrypt = require('bcryptjs');
// const {createCustomError} = require('../errors/customError');
const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const connectDb = require('../db/connect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtTkn = process.env.SCRT_TKN;
const ObjectId = require('mongodb').ObjectId;
const User = require('../models/User.js');

// GET {USER: ALL}
const getAllUser = async (req, res) => {
	try {
		console.log('getAllUser initializing');
		const result = await connectDb.getDB().db().collection('users').find();
		result.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists);
		});
		console.log('getAllUser successful');
	} catch (error) {
		res.status(500).json(error);
		console.log('getAllUser unsuccessful');
	}
};

// GET {USER}
const getUser = async (req, res) => {
	try {
		console.log('getUser initializing');
		const userId = new ObjectId(req.params.id);
		const result = await connectDb
			.getDB()
			.db()
			.collection('users')
			.find({_id: userId});
		result.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists[0]);
		});
		console.log('getUser successful');
	} catch (error) {
		res.status(500).json(error);
		console.log('getUser unsuccessful');
	}
};

// POST {USER: NEW}
const newUser = async (req, res) => {
	try {
		console.log('newUser initializing');
		let {username, password} = req.body;
		// let user = {
		// 	username: req.body.username,
		// 	password: req.body.password,
		// };
		console.log(username, password);
		const hashPass = await bcrypt.hash(password, 10);
		console.log(password);
		console.log(username);
		console.log(hashPass);
		password = hashPass;
		const user = {username, password};
		console.log(user);
		const checkUser = await connectDb
			.getDB()
			.db()
			.collection('users')
			.findOne({username});
		// console.log(checkUser);
		if (checkUser !== null) {
			if (checkUser.username == user.username) {
				// if (checkUser.username == user.username) {
				res.status(401).json({
					msg: 'Username already exists.',
				});
				console.log('User already exists');
				return;
			}
		}
		const response = await connectDb
			.getDB()
			.db()
			.collection('users')
			.insertOne(user);
		if (response.acknowledged) {
			res.status(201).json(response);
		} else {
			res.status(500).json(
				response.error || 'Some error occured while creating new user.'
			);
		}
		console.log('Success');
	} catch (error) {
		console.log('Error:', error);
		res.status(500).json(error);
		console.log('Failure');
	}
};

// POST {USER: LOGIN}
const lgnUser = async (req, res) => {
	try {
		console.log('lgnUser initialized');
		const {username, password} = req.body;
		const user = await connectDb
			.getDB()
			.db()
			.collection('users')
			.findOne({username});
		if (!user) {
			return res.status(401).json({msg: 'Invalid Username'});
		}
		const passChk = await bcrypt.compare(password, user.password);
		if (!passChk) {
			return res.status(401).json({msg: 'Invalid Password'});
		}
		const tkn = jwt.sign({userId: user._id}, jwtTkn);
		res.cookie('token', tkn, {httpOnly: true});
		console.log('lgnUser successful');
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json(error);
		console.log('lgnUser unsuccessful');
	}
};

// PATCH {USER}
const editUser = async (req, res) => {
	try {
		console.log('editUser initializing');
		let user = {
			username: req.body.username,
			password: req.body.password,
		};
		const response = await connectDb
			.getDB()
			.db()
			.collection('users')
			.replaceOne({_id: userId}, user);
		if (response.acknowledged) {
			res.status(204).json(response);
		} else {
			res.status(500).json(
				response.error || 'Some error occurred while updating the user'
			);
		}
		console.log('editUser successful');
	} catch (error) {
		res.status(500).json(error);
		console.log('editUser unsuccessful');
	}
};

// DELETE {USER}
const delUser = async (req, res) => {
	try {
		console.log('delUser initialized');
		const userId = new ObjectId(req.params.id);
		const response = await connectDb
			.getDB()
			.db()
			.collection('users')
			.deleteOne({_id: userId}, true);
		console.log(response);
		if (response.acknowledged) {
			res.status(200).send(response);
		} else {
			res.status(500).json(
				response.error ||
					'Some error occurred while deleting this user.'
			);
		}
		console.log('delUser successful');
	} catch (error) {
		res.status(500).json(error);
		console.log('delUser unsuccessful');
	}
};

module.exports = {getAllUser, getUser, newUser, editUser, delUser, lgnUser};
