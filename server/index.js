const express = require("express");
const cors = require("cors")
const mysql = require("mysql");
const app = express();
const port = 3000;

const db = mysql.createConnection({
	host: "sql.freedb.tech",
	user: "freedb_gstvmrtns",
	password: "#*$CfuZ4g9qD8Un",
	database: "freedb_USER_SCHEMA",
});

app.use(express.json());
app.use(cors());

db.connect(function(err) {
	if (err)
		console.log(err);
	console.log("Connected!");
});

app.post('/login', async (req, res) => {
	console.log(req.body);
});

app. listen(port, () => {
	console.log("Server online on port ${port}")
})
