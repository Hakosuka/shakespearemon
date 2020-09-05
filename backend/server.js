const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4009;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function() {
	console.log("Hello there from Port " + PORT);
});