const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let oddSum = 0;
let evenSum = 0;

let result = 0;

for(let i = 0; i < input.length; i++) {
    if(i % 2 === 0) {
        oddSum += input[i];
    } else {
        evenSum += input[i];
    }
}

result = Math.abs(oddSum - evenSum);

console.log(result);