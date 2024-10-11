# Sprint 7 project

PROJECT NAME:
Jest API testing suite for Urban Grocers app

PROJECT DESCRIPTION:
The Jest API testing suite for Urban Grocers app allows you to fetch the server data by passing the API endpoints through requests GET,POST,PUT and DELETE by creating and executing the tests on the IDE environment Visual Studio Code.The primary objective of the project is that it allows you to check for the actual status codes and response body with the expected ones that are received from the server end.

TECHNOLOGIES AND TECHNIQUES USED:
Javascript           : Used to build frontend elements
Nodejs               : This is a Javascript Run time Environment
Visual Studio code   : This is a development environment(IDE)used for coding and debugging
Postman              : Exclusively used for API testing
Git and GitHub       : Git is a Version Control System from local machine connecting to the remote repository GitHub for project collaborations.
NPM                  : Node Package Manager consists of all the libraries for Javascript that is used in buiding the applications
Commands             : Used commands in order to run the tests in VS code terminal and also to connect to the remote repository on Git Bash.
API Documentation    : Used the endpoints from the API documentation required for the project


HOW TO RUN THE Project:

1. To have access to the project:
    *Navigate to the Project Directory using `cd` command to open th Project Folder, if you want to create a new project then use `mkdir` command then navigate using `cd`.
   
2. Install the NPM Package:
    *Run `npm install` command on the VS Code terminal(Terminal->New Terminal from Menu Bar) from the Project Directory 

3. Get the server URL :
    *Start the server on TripleTen platform, copy the server URL

4. Add the server URL :
    *Open 'config.js' file from the Project Folder and paste the Server URL in "API_URL:"

5. To run the tests :
    *Save the file(Ctrl+S) with the code with 2 tests for an endpoint
    *On the Terminal(make sure you're on your Project Directory), run `npx jest` command to run all the files with tests(To run a single file: Run `npx jest filename.js`)

How I performed :
1. POSTMAN
    *I have accessed the endpoints from the API Documentation(Paste the Server URL/docs/ - Opens the API Doc)
    *I chose these endpoints GET(/api/v1/couriers), POST(/api/v1/products/kits),PUT(/api/v1/kits/7) and DELETE(/api/v1/kits/7) for these requests.
    *Pasted the Server URL and the endpoints in the Postman
    *Based on the request method have passed parameters/request body 
    *Checked for the status code and response body in Postman
2.VS CODE & TERMINAL
    *Wrote the tests using those endpoints 
    *Debugged the code on the terminal using `npx jest` to get whatever received from the Postman.