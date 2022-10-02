const prompts = require("./src/userPrompts")

prompts.promptManager().then(prompts.addEmployee);