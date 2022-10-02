const Employee = require('../lib/Employee')

test("Creates employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Function getName() returns name", () => {
    const employee = new Employee("Bob");
    expect(employee.getName()).toBe("Bob");
});

test("Function getId() returns id", () => {
    const employee = new Employee("Bob", 928947);
    expect(employee.getId()).toBe(928947);
});

test("Function getEmail() returns email", () => {
    const employee = new Employee("Bob", 928947,"bob@bobsemail.com");
    expect(employee.getEmail()).toBe("bob@bobsemail.com");
});

test("Function getRole() returns role", () => {
    const employee = new Employee;
    expect(employee.getRole()).toBe("Employee")
   });