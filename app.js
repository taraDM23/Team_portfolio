const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const Engineer = require("./Library/Engineer");
const Manager = require("./Library/Manager");
const Intern = require("./Library/Intern");


//================CLI prompts===============================
class Main {

  constructor() {
    this.team = [];
  }

  async generateHTML() {
    let HTMLPort = '';
    for (const Employee of this.team) {
      HTMLPort += Employee.generateHTML();
      console.log(HTMLPort)
    }

    const template1 = await readFilePromise("./main.html", "utf-8");
    const template2 = await readFilePromise("./main2.html", "utf-8");
    const result = template1 + HTMLPort + template2;
    await writeFileAsync(path.resolve(__dirname, 'Team_Summary.html'), result);
    console.log("Creating Summary")
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
          type: "input",
          name: "id",
          message: "Enter Employee Identification number"
        },
        {
          type: "input",
          name: "email",
          message: "Enter Employee email address",
        },
        {
          type: "list",
          name: "role",
          message: "Select Employee position",
          choices: [
            "Engineer",
            "Manager",
            "Intern"
          ]
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

      //obj construct
      const {
        name,
        id,
        role,
        email,
        github,
        school,
        officeNumber
      } = response

      if (role === "Engineer") {
        this.team.push(new Engineer(name, id, email, github));
      }
      if (role === "Manager") {
        this.team.push(new Manager(name, id, email, officeNumber));
      }

      if (role === "Intern") {
        this.team.push(new Intern(name, id, email, school));
      }
    }
    console.log(this.team);

  }
}

module.exports = Main;


