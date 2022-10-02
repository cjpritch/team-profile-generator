const inquirer = require('inquirer')
const { createEngineer } = require("../lib/Engineer")
const { createIntern }  = require("../lib/Intern")
const { createManager } = require("../lib/Manager")
const templateData = require('../utils/generateTile')
const createTemplate = require("../utils/generateTemplate")
const { writeFile } = require('../utils/writeFile')


const promptManager = data => {          
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter a name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID number?",            
            validate: (idNumber) => {
              idNumber = idNumber || 0;  
              if (idNumber > 0) {
                return true;                            
              } else {    
                console.log('Please enter an employee ID!');    
                return false;    
          
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            default: () => {},
            validate: function (email) {  
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)        
                if (valid) {                  
                    return true;
                } else {
                    console.log("Please enter a valid email address!")
                     return false;
                }
            }
        },
        {
            type: 'input',
            name: 'phone',
            message: "What is the manager's telephone number?",
            default: () => {},
                validate: function (phone) {  
                    valid = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone)        
                    if (valid) {                  
                        return true;
                    } else {
                        console.log("Please enter a valid phone number, XXX-XXX-XXXX.")
                        return false;
                    } 
                } 
         },           
    ]).then(createManager).then(promptAddEmployee);
};



const promptAddEmployee = answer => {   
        return inquirer.prompt([
            {
                type: 'list',
                message: "How would you like to proceed?",
                name: 'employeeList',                
                choices: ["Add Engineer", "Add Intern", "Complete"]
            }
        ]).then(promptEmployee)    
    };

      
const promptEmployee = (answer) => {  
  console.log(answer.employeeList);
    if(answer.employeeList === "Add Engineer") {      
          promptEngineer();        
        } else if(answer.employeeList === "Add Intern") {
            promptIntern();
        } else {
            const pageData = templateData.tileArray.join("");      
            const html = createTemplate(pageData);  
            writeFile(html);            
        }

    };  

const promptEngineer = data => {   
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter a name!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID number?",            
            validate: (idNumber) => {
               idNumber = idNumber || 0;  
                if (idNumber > 0) {
                return true;                            
                } else {    
                console.log('Please enter an employee ID!');    
                return false;    
            
                }
            }
        },      
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",           
            validate: function (email) {  
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)        
                if (valid) {                  
                    return true;
                } else {
                    console.log("Please enter a valid email address!")
                        return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",            
            validate: (githubInput) => {
                if(githubInput) {               
                return true;                            
                } else {    
                console.log('Please enter a GitHub username!');    
                return false;    
            
                }
            }
        },      
        
          
        
        ]).then(createEngineer).then(promptAddEmployee);
    };

const promptIntern = data => {      
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: internInput => {
                if (internInput) {
                return true;
                } else {
                console.log('Please enter a name!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID number?",            
            validate: (internIDNumber) => {
                internIDNumber = internIDNumber || 0;  
                if (internIDNumber > 0) {
                return true;                            
                } else {    
                console.log('Please enter an employee ID!');    
                return false;    
            
                }
            }
        },
        {
            type: 'input',
            name: 'Email',
            message: "What is the intern's email address?",
            default: () => {},
            validate: function (internEmail) {  
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmail)        
                if (valid) {                  
                    return true;
                } else {
                    console.log("Please enter a valid email address!")
                        return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern attending?",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
                }
            },              
        ]).then(createIntern).then(promptAddEmployee);
    };
    
module.exports = { promptManager, promptEngineer, promptIntern };