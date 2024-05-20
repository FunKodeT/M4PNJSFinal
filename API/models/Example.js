const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExampleSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model('examples', ExampleSchema);
