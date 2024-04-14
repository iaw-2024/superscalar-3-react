const express = require("express");
const fs = require("node:fs");
const cors = require('cors');

const app = express();
app.use(cors())

let tableData = null;

fs.readFile("api/datos.json", 'utf8', (err, data) => {
	console.log(new Date());
	if (err) {
		console.error(err);
		return;
	}
	tableData = { productos: JSON.parse(data) };
});

app.get("/datos", (req, res) => res.send(tableData));
app.use(express.static('public'))

app.listen(3001, () => console.log("Server ready on port 3001"));

module.exports = app;