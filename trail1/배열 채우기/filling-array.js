const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = [];
for(let i = 0; i < input.length; i++) {
    if(input[i] === 0) break;
    arr.push(input[i]);
}

let result = [];
for(let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
}

console.log(result.join(" "));