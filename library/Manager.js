const Employee = require("./Employee");

module.exports = class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }

  generateHTML() {
    return `
    
      <div class="card" style="width: 16rem;" id="Employee">
        <div class="card-header">
            ${this.name}
            <h6>Manager</h6><img class="icon" src="https://image.flaticon.com/icons/png/512/993/993723.png" alt="..." />
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID - ${this.id}</li>
            <li class="list-group-item"> Email - <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item"> Github - ${this.officeNumber}</li>
        </ul>
      </div>
   
    `
}}