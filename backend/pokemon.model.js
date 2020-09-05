const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pokemon = new Schema({
	name: { type: String },
	description: { type: String }
});

module.exports = mongoose.model('Pokemon', Pokemon);