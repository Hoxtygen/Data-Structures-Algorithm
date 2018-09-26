//Each dancer is stored in a Dancer object:
function Dancer(name, sex) {
    this.sex = sex;
    this.name = name;
}

//Next we need a function to load the dancers from the file into the program:

function getDancers() {
    const fs = require("fs")
    let names = fs.readFile("dance.txt", "ascii", (err, data) => {
        if (err) {
            return err;
        }
        return data.split("\n"); 
        
    });
    console.log(names);
    
}
getDancers()