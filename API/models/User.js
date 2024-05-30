const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
		unique: true,
	},
	passWord: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model('User', UserSchema);
// newObjectId
