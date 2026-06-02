const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const result = [input[0], input[1]];

for(let i = 2; i < 10; i++) {
    result.push(2 * result[i - 2] + result[i - 1])
}

console.log(result.join(" "));