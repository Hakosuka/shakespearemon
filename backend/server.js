const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const pokeRoutes = express.Router();
const PORT = 4000;

//Access all Pokemon documents through the Model
let PokemonModel = require('./pokemon.model');

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
	/** I'm using findOne() instead of find() because if the user enters part of a Pokemon name,
	 *	they'll get every Pokemon with that part in its name, for example "jol" could mean either
	 *  Jolteon or Joltik. The Pokemon with the lowest National Dex number will be sent to the user,
	 * 	because that was how the database is sorted.
	 */
	PokemonModel.findOne().byName(name).exec(function(err, pkmn_to_send) {
		console.log("Data to be sent at " + Date() + ": " + pkmn_to_send);
		if(!pkmn_to_send)
			res.status(404).send(`Alas, poor Trainer, this Pokémon ${name} you did seek does not yet exist. Please try again.`);
		else
			res.json(pkmn_to_send);
	});
});
app.use('/pokemon', pokeRoutes);
app.listen(PORT, function() {
	console.log("Hello there from Port " + PORT);
});
