const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = input[0];
const arr = input[1].split(" ").map(Number);

const result = arr.map((x) => x **2)

console.log(result.join(" "));