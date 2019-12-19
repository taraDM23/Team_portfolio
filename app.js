const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
module.exports = class Main {

  constructor() {}
  async run () {
    await inquirer.prompts
  }
}

/* async run() {
		const { teamSize } = await inquirer.prompt([{
		type: 'input',
		name: 'teamSize',
		message: 'How many team members you have?',
		default: 2,
		}]);

		for (let i = 0; i < teamSize; i++) {
		const response = await inquirer.prompt([
				{
					type: 'input',
					name: 'name',
					message: 'Please input your name',
				},
				{
		 			type: 'input',
					name: 'email',
					message: 'Please input your email',
				},
	 		{
		 			type: 'list',
		 			name: 'role',
		 			message: 'Please input your role',
		 			choices: [
		 				Main._ENGINEER,
		 				Main._INTERN,
						Main._MANAGER
		 			]
		 		},
		 		{
		 			type: 'input',
					name: 'github',
	/* 	// 			message: 'Please input your github',
		// 			when: ({ role }) => role === Main._ENGINEER
		// 		},
		// 		{
		// 			type: 'input',
		// 			name: 'school',
		// 			message: 'Please input your school',
		// 			when: ({ role }) => role === Main._INTERN
		// 		},
		// 		{
		// 			type: 'input',
		// 			name: 'roomNumber',
		// 			message: 'Please input your room number',
		// 			when: ({ role }) => role === Main._MANAGER
		// 		},
		// 	]);

		// 	const {
		// 		name,
		// 		email,
		// 		role,
		// 		github,
		// 		school,
		// 		roomNumber,
		// 	} = response;

		// 	if (role === Main._ENGINEER) {
		// 		this._teamArray.push(new Engineer(name, email, github));
		// 	}
		// 	if (role === Main._INTERN) {
		// 		this._teamArray.push(new Intern(name, email, school));
		// 	}
		// 	if (role === Main._MANAGER) {
		// 		this._teamArray.push(new Manager(name, email, roomNumber));
		// 	}
		// } */

/* 		this._teamArray = [
			new Engineer('engineer name', 'engineer email', 'engineer github'),
			new Intern('intern name', 'intern email', 'intern school'),
			new Manager('manager name', 'manager email', 'manager room number'),
		]

		await this._hard();
	}
}

 */