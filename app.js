const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


module.exports = class Main {

  constructor() {
    this.team = [];
  }
  async run() {
    const { teamSize } = await inquirer.prompt([{
      type: "input",
      name: "teamSize",
      message: "Enter team size",
    }]);

    for (let i = 0; i < teamSize; i++) {

      const response = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Enter Employee Name"
        },
        {
          type: "list",
          name: "role",
          message: "Choose Employee position",
          choices: [
            "Engineer",
            "Manager",
            "Intern"
          ]
        },
        {
          type: "input",
          name: "email",
          message: "Enter Employee email address",
        },
        {
          type: "input",
          name: "github",
          message: "Enter Employee Github username",
          when: ({ role }) => role === "Engineer"
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter Employee Office Number",
          when: ({ role }) => role === "Manager"
        },
        {
          type: "input",
          name: "school",
          message: "Enter Education Institute of Intern",
          when: ({ role }) => role === "Intern"
        }
      ]);
      this.team.push(response)
      console.log(this.team);
    }
  }
}

