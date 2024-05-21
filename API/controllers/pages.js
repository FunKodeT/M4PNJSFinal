const {mongo} = require('mongoose');
const mongodb = require('../db/connect');
const asnycWrap = require('../middleware/asyncWrapper');

module.exports = {homePage};
