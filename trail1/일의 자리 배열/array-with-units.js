const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const result = [];

for (let i = 0; i < 10; i++) {
    if (i <= 1) {
        result.push(input[i]);
    } else {
        result.push((result[i - 2] + result[i - 1]) % 10);
    }
}

console.log(result.join(" "));