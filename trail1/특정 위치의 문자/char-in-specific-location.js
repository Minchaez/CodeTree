const str = ['L', 'E', 'B', 'R', 'O', 'S'];

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const result = [];

for(let i = 0; i < str.length; i++) {
    if(str[i] === input) {
        result.push(i);
    }
}

if(result.length === 0) result.push("None");

console.log(result.join(""));