require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const connectDB = require('../API/db/connect.js');
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');

// ROUTES
app.use(cors())
	.use(express.json())
	.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	})
	.use('/', require('./routes/index.js'));
// This will throw an error when not connected via ethernet

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

connectDB.initDB((err) => {
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
