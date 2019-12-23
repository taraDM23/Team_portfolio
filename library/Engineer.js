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
    
      <div class="card" style="width: 16rem;" id="Employee">
        <div class="card-header">
            ${this.name} 
            <h6>Engineer</h6><img class="icon" src="https://image.flaticon.com/icons/png/512/2377/2377315.png" alt="..." />
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> ID: ${this.id}</li>
          <li class="list-group-item"> Email: <a href="mailto:${this.email}" target="_blank">${this.email}</a></li>
          <li class="list-group-item"> Github: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>



        </ul>
      </div>
      
  `

}}