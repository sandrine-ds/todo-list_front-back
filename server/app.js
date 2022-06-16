require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@todoapp.pz753.mongodb.net/TodoApp?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connecté à la DB !");
  });

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).json(error);
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Serveur lancé sur port ${port}`));
