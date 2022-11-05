const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const usersRoutes = require("./server/routes/router");
const connectDB = require("./server/database/connection");

const app = express();
const PORT = 8080;

// load env variables
dotenv.config({ path: "config.env" });

// mongodb connection
connectDB();

// log request
app.use(morgan("tiny"));

// parse request to body-parser
app.use(bodyParser.json());

// load routers
app.use("/", usersRoutes);
app.use("/login", usersRoutes);
app.use("/cadastro", usersRoutes);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:${PORT}");
});
