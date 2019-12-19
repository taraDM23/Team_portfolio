module.exports = class Employee {
  constructor(name, id, email, role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
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

