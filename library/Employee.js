//const empId = require("id");

module.exports = class Employee {
  constructor(name, id, email, title) {
    this.id = id;
    //empId.generate();
    this.name = name;
    this.email = email;
    this.title = title;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.constructor.name;
  }
}