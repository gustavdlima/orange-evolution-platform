import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

// const express = require("express");
// const bodyparser = require("body-parser");
// const dotenv = require("dotenv");
// const morgan = require("morgan");
// const path = require('path');

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: "config.env" });
const PORT = 8080

// log request
app.use(morgan("tiny"));

//parse request to body-parser
app.use(bodyParser.json())

// set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get("/cadastro", (req, res) => {
  res.render('cadastro');
});

app.get("/login", (req, res) => {
	res.render('login');
  });

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:${PORT}");
});
