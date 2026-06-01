const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let result= [];
let arr = [];
let sum = 0;

for(let i = 0; i < input.length; i++) {
    if(input[i] === 0) break;
    result.push(input[i]);
}

arr = result.slice(-3);

for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);