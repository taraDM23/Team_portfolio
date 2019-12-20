const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require('path');
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

    /* const template1 = await readFilePromise("./main.html", "utf-8");
    console.log("read main")

    const template2 = await readFilePromise("./main2.html", "utf-8");
    console.log("read main2") */

    const result = Main.bodyStart + HTMLPort + Main.bodyEnd;
    await writeFileAsync(path.resolve(__dirname, 'Team_Summary.html'), result);
    console.log("Creating Summary")
  }
  catch(err) {
    console.log(err)
  }

  async prompts() {
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
    await this.generateHTML();
  }
}

Main.bodyStart = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style>
        .card {
            display: flex;
            float: left;
        }
        
        .card:not(:last-child) {
            margin-right: 20px;
            margin-bottom: 10px;
        }

        .icon {
            width: 50px;
            height:50px;
            padding-right: 7px;
            padding-bottom: 10px;
        }
    </style>
    <title>Team Summary</title>
</head>

<body>
    <div class="card text-center" id="Canvas">
        <div class="card-header">
            <h5 class="card-title">Team Summary</h5>
        </div>
        <div class="card-body">

        
`;

Main.bodyEnd = `

       </div>
        <div class="card-footer text-muted">
            Footer
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/85711ad931.js" crossorigin="anonymous"></script>
</body>

</html>



`
module.exports = Main;


