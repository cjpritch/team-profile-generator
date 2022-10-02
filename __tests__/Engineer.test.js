const { Engineer} = require('../lib/Engineer')


test("Creates Engineer object", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});

test("Function getGitHub() returns GitHub user ID", () => {
    const engineer = new Engineer("Bob", 999, "bob@bob.com", "bobsgithubid");  
    expect(engineer.getGitHub()).toBe("bobsgithubid");
});

test("Function getRole() returns Engineer", () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe("Engineer")
});