const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let result = 0;

for(let i = 0; i < arr.length; i++){
    result += arr[i];
}

console.log(result);