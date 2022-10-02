const Employee = require("./Employee")
const tiles = require("../utils/generateTile");

class Manager extends Employee {
    constructor(name, id, email, phone ) {
        super(name, id, email);
        this.phone = phone;
        this.role = "Manager";
    }
    getNumber() {    
        return this.phone;
    }
};

const createManager = data => {
    const {name, id, email, phone} = data;   
    const employee = new Manager(name, id, email, phone)    
    tiles.generateTile(employee)
};
    
module.exports = { Manager, createManager };