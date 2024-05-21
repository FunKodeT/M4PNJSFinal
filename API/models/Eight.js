const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PredictionSchema = new Schema({
	userQuery: {
		type: String,
		required: true,
	},
	ballAnswer: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model('predictions', PredictionSchema);
