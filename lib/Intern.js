const Employee = require("./Employee")
const tiles = require("../utils/generateTile")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }   
};
    
const createIntern = data => {  
        const {name, id, email, school} = data;   
        const employee = new Intern(name, id, email, school)    
        tiles.generateTile(employee)
};

module.exports = { Intern, createIntern };