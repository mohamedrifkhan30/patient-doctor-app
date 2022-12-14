const express = require("express");
const Patient = require("../models/patient");

const router = express.Router();

router.post("", (request, response, next) => {
  const patient = new Patient(null, request.body.name, request.body.doctorId);
  patient
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

router.get("/:id", (request, response, next) => {
  Patient.findById(request.params.id)
    .then(([patient]) => patient[0])
    .then((patient) => {
      response.status(200).json({
        message: "Patient",
        patient,
      });
    })
    .catch((err) => {
      response.status(500).json({
        message: err,
        doctors: [],
      });
    });
});

router.use("", (request, response, next) => {
  Patient.fetchAll()
    .then(([patients]) => {
      return patients.map((res) => {
        res.doctor = {
          name: res.doctorName,
          id: res.doctorId,
        };
        delete res.doctorName;
        return res;
      });
    })
    .then((patients) => {
      response.status(200).json({
        message: "Available Patients",
        patients,
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
