const Employee = require("./Employee")
const tiles = require("../utils/generateTile");

class Engineer extends Employee {
    constructor(name, id, email, github ) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
    getGitHub() {
        return this.github;
    }
};

const createEngineer = data => {
    const {name, id, email, github} = data;   
    const employee = new Engineer(name, id, email, github)    
    tiles.generateTile(employee)
};
    
module.exports = { Engineer, createEngineer };