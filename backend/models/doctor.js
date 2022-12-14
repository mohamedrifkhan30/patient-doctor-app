const db = require("../database.js");

module.exports = class Doctor {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {
    return db.execute("INSERT INTO doctors (name) VALUES(?)", [this.name]);
  }

  static remove(id) {}
  static findById(id) {}

  static fetchAll() {
    return db.execute("SELECT * from doctors");
  }
};