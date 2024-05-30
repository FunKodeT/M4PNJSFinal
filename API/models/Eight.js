const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PredictionSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	userQuestion: {
		type: String,
		required: true,
	},
	magicAnswer: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model('predictions', PredictionSchema);
