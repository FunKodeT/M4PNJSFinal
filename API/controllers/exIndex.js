const {mongo} = require('mongoose');
const mongodb = require('../db/exConnect');
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

// GET EXAMPLES: ALL
const getAllExamples = async (req, res) => {
	try {
		const result = await mongodb.getDB().db().collection('examples').find();
		result.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists);
		});
	} catch (error) {
		res.status(500).json(error);
	}
};

// GET EXAMPLES: ONE
const getOneExamples = async (req, res) => {
	try {
		const exampleID = new ObjectId(req.params.id);
		const result = await mongodb
			.getDB()
			.db()
			.collection('examples')
			.find({_id: exampleID});
		console.log(result);
		result.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists[0]);
		});
	} catch (error) {
		res.status(500).json(error);
	}
};

// POST EXAMPLES: NEW
const newExamples = async (req, res) => {
	try {
		const example = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		};
		const response = await mongodb
			.getDB()
			.db()
			.collection('examples')
			.insertOne(example);
		if (response.acknowledged) {
			res.status(201).json(response);
		} else {
			res.status(500).json(
				response.error ||
					'Some error occured while creating new example.'
			);
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

// PATCH EXAMPLES: ONE
const patchExamples = async (req, res) => {
	try {
		const exampleID = new ObjectId(req.params.id);
		const example = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		};
		const response = await mongodb
			.getDB()
			.db()
			.collection('examples')
			.replaceOne({_id: exampleID}, example);
		if (response.acknowledged) {
			res.status(204).json(response);
		} else {
			res.status(500).json(
				response.error ||
					'Some error occurred while updating the example.'
			);
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

// DELETE EXAMPLES: ONE
const delExamples = async (req, res) => {
	try {
		const exampleID = new ObjectId(req.params.id);
		const response = await mongodb
			.getDB()
			.db()
			.collection('examples')
			.deleteOne({_id: exampleID}, true);
		console.log(response);
		if (response.acknowledged) {
			res.status(200).send(response);
		} else {
			res.status(500).json(
				response.error ||
					'Some error occurred while deleting this example.'
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
	getAllExamples,
	getOneExamples,
	newExamples,
	patchExamples,
	delExamples,
};
