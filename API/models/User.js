const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// userSchema.pre('save', async function (next) {
// 	if (this.isModified('password')) {
// 		this.password = await bcrypt.hash(this.password, 10);
// 	}
// 	next();
// });

// const User = mongoose.model('users', userSchema);

const User = mongoose.model('User', UserSchema);
module.exports = User;

// module.exports = mongoose.model('User', UserSchema);
