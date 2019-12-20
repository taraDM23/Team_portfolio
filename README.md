# Team_portfolio


#### Description 
This application will generate a teams Github portfolio via CLI or command line interface. Once the data has been entered via a users terminal a html page will be generated with the teams stats and credentials.

The focus point of this application is the use of node.js and npm.


### How to Use
#### Requirements
This application requires Node Package Managers to be executed.
These can be installed via your terminal.

* Install : npm install
* Install : npm i inquirer
* * visit https://www.npmjs.com/package/inquirer for more information

Once you have installed the above packages you can run the program in your terminal.

1. enter npm start
2. You will be promoted to enter your team size
3. Hit enter
4. You will be promoted to enter your team members details e.g. "Enter Employee Name"
5. When compete hit enter. This question and answer flow will continue until the next "Enter Employee Name"
6. Repeat step 4 and 5 until you enter all team member details.
7. Once completed a Team_Summary.html file will be created
8. Use your browser to view the team portfolio.


#### Technologies 
Project is created with:

* HTML5
* CSS
* nodeJS

#### Packages Used
* npm
* inquirer

#### Quality Assurance Tests:

##### Responsiveness and CSS per browser
* Unit tests run can be found under the test folder. 
* As of writing all tested have successfully passed. To check run -- npm test -- in your terminal


#### Limitations:
* The results rendered by the application is limited to the users local device.

##### Minimum Requirements

* Functional, deployed application. [x]

* GitHub repository with a unique name and a README describing project. [x]

* User can use the CLI to generate an HTML page that displays information about their team. [x]

* All tests must pass. [x]


