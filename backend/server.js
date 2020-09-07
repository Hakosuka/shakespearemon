const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const pokeRoutes = express.Router();
const PORT = 4000;

//Access all Pokemon documents through the Model
let Pokemon = require('./pokemon.model');

app.use(cors()); //enable Cross-Origin Resource Sharing
app.use(bodyParser.json());

//Connect to the Mongo database
mongoose.connect('mongodb://localhost:27017/pokemon', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'Connection error:'));
connection.once('open', function(){
	console.log("MongoDB database connection established successfully.");
});
//Create endpoints for each Pokédex entry using the corresponding Pokémon's name
pokeRoutes.route('/:name').get(function(req, res) {
	let name = req.params.name;
	Pokemon.find().byName(name).exec(function(err, pokemon) {
		if(!pokemon)
			res.status(404).send(`Alas, poor Trainer, this Pokémon ${name} you did seek does not yet exist. Please try again.`);
		else
			res.json(pokemon);
	});
});
app.use('/pokemon', pokeRoutes);
app.listen(PORT, function() {
	console.log("Hello there from Port " + PORT);
});
