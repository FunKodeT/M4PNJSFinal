const {mongo} = require('mongoose');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// POC FOR FINAL
const finalProof = (req, res, next) => {
	res.send(`<h1>Hello from my route.</h1>`);
};

// SERVER TEST FUNCTIONS
const serverTest1 = (req, res, next) => {
	res.json(
		'This is the first confirmation of server initialization success. See: /test2 to verify second confirmation.'
	);
};

const serverTest2 = (req, res, next) => {
	res.json(
		'This is the second confirmation of server initialization success. See: Basic NodeJS and Express functionality success'
	);
};

// GET PREDICTION: ALL
const getAllPredictions = async (req, res) => {
	try {
		const result = await mongodb
			.getDB()
			.db()
			.collection('predictions')
			.find();
		result.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists);
		});
	} catch (error) {
		res.status(500).json(error);
	}
};

// GET PREDICTION: ONE
const getOnePrediction = async (req, res) => {
	try {
		const predictionID = new ObjectId(req.params.id);
		const result = await mongodb
			.getDB()
			.db()
			.collection('predictions')
			.find({_id: predictionID});
		console.log(result);
		result.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists[0]);
		});
	} catch (error) {
		res.status(500).json(error);
	}
};

// POST PREDICTION: NEW
const newPrediction = async (req, res) => {
	try {
		const prediction = {
			userQuery: req.body.userQuery,
			ballAnswer: req.body.ballAnswer,
		};
		const response = await mongodb
			.getDB()
			.db()
			.collection('predictions')
			.insertOne(prediction);
		if (response.acknowledged) {
			res.status(201).json(response);
		} else {
			res.status(500).json(
				response.error ||
					'Some error occured while creating new prediction.'
			);
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

// DELETE PREDICTION: ONE
const delPrediction = async (req, res) => {
	try {
		const predictionID = new ObjectId(req.params.id);
		const response = await mongodb
			.getDB()
			.db()
			.collection('predictions')
			.deleteOne({_id: predictionID}, true);
		console.log(response);
		if (response.acknowledged) {
			res.status(200).send(response);
		} else {
			res.status(500).json(
				response.error ||
					'Some error occurred while deleting this prediction.'
			);
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	finalProof,
	serverTest1,
	serverTest2,
	getAllPredictions,
	getOnePrediction,
	newPrediction,
	delPrediction,
};
