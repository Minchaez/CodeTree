const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const result = [];

for(let i = 0; i < input.length; i++) {
    if(input[i] === 0) break;

    if(input[i] % 2 === 0) {
        result.push(input[i]/2);
    } else {
        result.push(input[i] + 3);
    }
}

console.log(result.join(" "));