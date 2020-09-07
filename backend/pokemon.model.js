const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pokeSchema = new Schema({
	name: String,
	description: String	
});

//This allows the database to be searched by the Pokemon's name
pokeSchema.query.byName = function(name){
	return this.where({ name: new RegExp(name, 'i')}); //The 'i' flag means it's case-insensitive
};
//By default, Mongoose uses the lower-case, plural form of the Model name for collections, so this needs to be overwritten.
module.exports = mongoose.model('Pokemon', pokeSchema, 'pokemon');