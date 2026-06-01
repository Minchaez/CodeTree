const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
const result = [];

for(let i = 0; i < input.length; i++) {
    if(i === 1 || i === 4 || i === 7) {
        result.push(input[i]);
    }
}

console.log(result.join(" "));