const express = require('express');
const router = express.Router();
const {mongo} = require('mongoose');
const mongodb = require('../db/connect');
const fs = require('fs');
const path = require('path');

// HOMEPAGE
exports.getHomePage = async (req, res) => {
	const homePath = path.join(__dirname, '..', 'JSCall', 'home.js');
	/* 	
	fs.readFile(homePath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).send('Error reading the requested content');
		} else {
			res.send(data);
		}
	});
 */
	res.sendFile(homePath);
};

// ABOUTPAGE
exports.getAboutPage = async (req, res) => {
	const aboutPath = path.join(__dirname, '..', 'JSCall', 'about.js');
	/* 	
	fs.readFile(aboutPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).send('Error reading the requested content');
		} else {
			res.send(data);
		}
	});
 */
	res.sendFile(aboutPath);
};

// CONTACTPAGE
exports.getContactPage = async (req, res) => {
	const contactPath = path.join(__dirname, '..', 'JSCall', 'contact.js');
	/* 	
	fs.readFile(contactPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).send('Error reading the requested content');
		} else {
			res.send(data);
		}
	});
 */
	res.sendFile(contactPath);
};

// ASKPAGE
exports.getAskPage = async (req, res) => {
	const askPath = path.join(__dirname, '..', 'JSCall', 'ask.js');
	/* 	
	fs.readFile(askPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).send('Error reading the requested content');
		} else {
			res.send(data);
		}
	});
 */
	res.sendFile(askPath);
};

// ANSWERPAGE
exports.getAnswerPage = async (req, res) => {
	const answerPath = path.join(__dirname, '..', 'JSCall', 'answer.js');
	/* 	
	fs.readFile(answerPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).send('Error reading the requested content');
		} else {
			res.send(data);
		}
	});
 */
	res.sendFile(answerPath);
};

// SIGNINPAGE
exports.getSignInPage = async (req, res) => {
	const signInPath = path.join(__dirname, '..', 'JSCall', 'signin.js');
	/* 
	fs.readFile(signInPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).send('Error reading the requested content');
		} else {
			res.send(data);
		}
	});
*/
	res.sendFile(signInPath);
};

// REGISTERPAGE
exports.getRegisterPage = async (req, res) => {
	const registerPath = path.join(__dirname, '..', 'JSCall', 'register.js');
	/* 	
	fs.readFile(registerPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).send('Error reading the requested content');
		} else {
			res.send(data);
		}
	});
 */
	res.sendFile(registerPath);
};

// SIGNOUTPAGE
exports.getSignOutPage = async (req, res) => {
	const SignOutPath = path.join(__dirname, '..', 'JSCall', 'SignOut.js');
	/* 
	fs.readFile(SignOutPath, 'utf8', (err, data) => {
		if (err) {
			res.status(500).send('Error reading the requested content');
		} else {
			res.send(data);
		}
	});
*/
	res.sendFile(SignOutPath);
};

module.exports = router;
