const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let str = [];
for(let i = arr.length - 1; i >= 0; i--) {
    str.push(arr[i]);
}

console.log(str.join(""))