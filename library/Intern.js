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
    <div class="card-body">
      <div class="card" style="width: 18rem;" id="Employee">
        <div class="card-header">
            ${this.name}
            Engineer
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID - ${this.id}</li>
            <li class="list-group-item"> Email - ${this.email}</li>
            <li class="list-group-item"> Github - ${this.school}</li>
        </ul>
      </div>
    </div> 
    `
  }
}