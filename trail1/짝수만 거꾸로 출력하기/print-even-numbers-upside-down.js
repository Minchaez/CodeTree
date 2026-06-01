const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr1 = input.slice(1).toString().trim().split(" ").map(Number);

const arr = [];
const result = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        arr.push(arr1[i]);
    }
}

for(let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
}

console.log(result.join(" "));