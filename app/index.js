
const express = require("express");
const router = require("../config/routes");
const cors = require("cors")

const app = express();


/** Install JSON request parser */
app.use(express.json());

/** Install Router */
app.use(router);

app.use(cors());

module.exports = app;
