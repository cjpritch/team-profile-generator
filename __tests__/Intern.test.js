const {Intern} = require('../lib/Intern')


test("Creates Intern object", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

test("Function getSchool() returns school", () => {
    const intern = new Intern("Bob", 111, "bob@bob.com", "Faber College");
    expect(intern.getSchool()).toBe("Faber College")
});

test("Function getRole() returns Intern", () => {
    const intern = new Intern;
    expect(intern.getRole()).toBe("Intern");
});