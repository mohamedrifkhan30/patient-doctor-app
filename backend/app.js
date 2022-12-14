const express = require("express");
const bodyParser = require("body-parser");

const doctorsRoutes = require("./routes/doctors");
const patientsRoutes = require("./routes/patients");

const app = express();

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use("/api/doctors",doctorsRoutes);
app.use("/api/patients",patientsRoutes);

module.exports = app;
