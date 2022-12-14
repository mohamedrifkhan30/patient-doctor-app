const db = require("../database.js");

module.exports = class Patient {
  constructor(id, name, doctorId) {
    this.id = id;
    this.name = name;
    this.doctorId = doctorId;
  }

  save() {
    return db.execute("INSERT INTO patients (name,doctorId) VALUES(?,?)", [
      this.name,
      this.doctorId,
    ]);
  }

  static remove(id) {}

  static findById(id) {
    return db.execute(
      `SELECT patients.id,patients.name,doctors.name as doctorName,doctors.id as doctorId from patients INNER JOIN doctors ON patients.doctorId=doctors.id WHERE patients.id=${id}`
    );
  }

  static fetchAll() {
    return db.execute(
      "SELECT patients.id,patients.name,doctors.name as doctorName,doctors.id as doctorId from patients INNER JOIN doctors ON patients.doctorId=doctors.id"
    );
  }
};
