const express = require('express');
const cors = require('cors');
const mongoDB = require('./db/exConnect');

const app = express();
const PORT = process.env.PORT || 3000;

// ROUTES
app.use(cors())
	.use(express.json())
	.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	})
	.use('/', require('./routes/exIndex'));
// This will throw an error when not connected via ethernet

mongoDB.initDB((err) => {
	if (err) {
		console.log(err);
	} else {
		app.listen(PORT);
		console.log(
			'\x1b[34m%s\x1b[0m',
			`Connected to DB and listening on ${PORT}`
		);
	}
});
