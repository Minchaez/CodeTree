const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sum = 0;
let sum3 = 0;
let avg = 0;
for(let i = 1; i < input.length; i += 2) {
    sum += input[i];
}

for(let i = 2; i< input.length; i += 3) {
    sum3 += input[i];
    avg = sum3 / 3;
}

console.log(sum, avg.toFixed(1))