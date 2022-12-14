const express = require("express");
const Doctor = require("../models/doctor");

const router = express.Router();

router.post("", (request, response, next) => {
  console.log(request.body);
  const doctor = new Doctor(request.body.id, request.body.name);
  doctor
    .save()
    .then((res) => {
      response.status(201).json({
        message: "Created",
      });
    })
    .catch((err) => {
      response.status(500).json({
        message: err,
      });
    });
});

router.use("", (request, response, next) => {
  Doctor.fetchAll()
    .then(([doctors]) => {
      response.status(200).json({
        message: "Available Doctors",
        doctors,
      });
    })
    .catch((err) => {
      response.status(500).json({
        message: err,
        doctors: [],
      });
    });
});

module.exports = router;
