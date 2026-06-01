const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sum = 0;
let avg = 0;
for (let i = 0; i < input.length; i++) {
    sum += input[i];
}
avg = sum / input.length;
console.log(avg.toFixed(1));
