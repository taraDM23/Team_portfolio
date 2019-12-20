const Employee = require("./Employee");

module.exports = class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
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
          <li class="list-group-item"> Github - ${this.github}</li>
        </ul>
      </div>
    </div>  
  `

}}