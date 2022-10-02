const prompts = require("../src/userPrompts")
tileArray = []

const generateTile = function(employee) {
    const  { name, id, email, phone, github, school,role } = employee;        
        if(role === "Manager") {
        const tile = function() {
        return `        
            <div class="card col-3 m-2" style="width: 24rem;">
                    <div class="card-body">
                    <h5 class="card-title">Manager: ${name} </h5>
                    <p class="card-text">Employee ID: ${id}</p>
                    <a href="mailto: ${email}"class="btn btn-primary">Email: ${email}</a>
                    <p class="card-text">Office phone: ${phone}</p>
                </div>
            </div> `            
        }  
        tileArray.push(tile())
        return;
};              
                             
if(role === "Engineer") {
    const tile = function() {
        return `
            <div class="card col-3 m-2" style="width: 24rem;">
                    <div class="card-body">
                    <h5 class="card-title">Engineer: ${name} </h5>
                    <p class="card-text">Employee ID: ${id}</p>
                    <a href="mailto: ${email}" class="btn btn-primary">Email: ${email}</a>
                    <a href="https://github.com/${github}" class="btn btn-primary">GitHub: ${github}</a>
                 </div>
            </div> `           
        }
        tileArray.push(tile())               
        return;

        } else {
        const tile = function() {
            return `      
            <div class="card col-3 m-2" style="width: 24rem;">        
                <div class="card-body">
                    <h5 class="card-title">Intern: ${name} </h5>
                    <p class="card-text">Employee ID: ${id}</p>
                    <p class="card-text">School: ${school}</p>
                    <a href="mailto: ${email}" class="btn btn-primary">Email: ${email}</a>                    
                </div>
            </div>`      
       
        }
        tileArray.push(tile())    
    }
};    
    
module.exports = { generateTile, tileArray };