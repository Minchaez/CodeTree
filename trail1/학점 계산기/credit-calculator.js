const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let avg = 0;
let sum = 0;
for(let i = 0; i < n; i++) {
    sum += arr[i];
    avg = sum / arr.length
}

console.log(avg.toFixed(1));
if(avg >= 4.0) {
    console.log("Perfect");
} else if (avg >= 3.0) {
    console.log("Good");
} else {
    console.log("Poor")
}