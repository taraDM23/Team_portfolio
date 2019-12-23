const Employee = require("./Employee");

module.exports = class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

  generateHTML() {
    return `
    
      <div class="card" style="width: 16rem;" id="Employee">
        <div class="card-header">
            ${this.name}
            <h6>Intern</h6><img class="icon" src="https://image.flaticon.com/icons/png/512/2038/2038385.png" alt="..." />
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${this.id}</li>
            <li class="list-group-item"> Email: <a href="mailto:${this.email}" target="_blank">${this.email}</a></li>
            <li class="list-group-item"> School: ${this.school}</li>
        </ul>
      </div>
    
    `
  }
}