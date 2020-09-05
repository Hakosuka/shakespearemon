const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4009;

app.use(cors());
app.use(bodyParser.json());

//Connect to the Mongo database
mongoose.connect('mongodb://127.0.0.1:27017/pokemon', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function(){
	console.log("MongoDB database connection established successfully.");
})
app.listen(PORT, function() {
	console.log("Hello there from Port " + PORT);
});