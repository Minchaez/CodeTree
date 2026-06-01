const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let result = 0;
let idx = arr.length;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 250) {
        idx = i;
        break;
    }
}

for (let i = 0; i < idx; i++) {
    result += arr[i];
}

let avg = result / idx;
console.log(result, avg.toFixed(1));