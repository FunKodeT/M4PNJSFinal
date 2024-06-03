require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('../API/db/connect.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
	.use(express.json())
	.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	})
	.use('/', require('./routes/admin.js'));
// This will throw an error when not connected via ethernet

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../Client/public')));
app.use('/public', (req, res, next) => {
	res.set('Content-Type', 'text/javascript');
	next();
});

// MONGO CONNECT, SERVER START
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

// OLD
/* app.use(cors())
	.use(express.json())
	.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	})
	.use('/', require('./routes/index.js'));
// This will throw an error when not connected via ethernet

ROUTES
app.use('/', routes);
app.use('/data/user', routes);
app.use('/test', routes);
const authRoute = require('../API/routes/auth.js');
const dataRoute = require('../API/routes/data.js');
app.use('/api/auth', authRoute);
app.use('/api/data', dataRoute);
 */
