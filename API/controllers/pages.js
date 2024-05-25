const express = require('express');
const router = express.Router();
const wrapper = require('../middleware/asyncWrapper');
const {mongo} = require('mongoose');
const mongodb = require('../db/connect');

// HOME PAGE
router.get(
	'/',
	wrapper(async (req, res, next) => {
		try {
			const homePage = {
				title: 'Magic 8-Ball',
				description: 'Discover your future, today!',
			};
			res.render('index', {
				homePage,
			});
		} catch (error) {
			console.log(error);
		}
	})
);

module.exports = router;
