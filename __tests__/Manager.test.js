const {Manager} = require('../lib/Manager')


test("Creates employee object", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});


test("Function getNumber() returns phone number", () => {
    const manager = new Manager("Bob", 111, "bob@bob.com", "999-999-9999");
    expect(manager.getNumber()).toBe("999-999-9999");
});

test("Function getRole() returns Manager", () => {
    const manager = new Manager;
    expect(manager.getRole()).toBe("Manager")
});