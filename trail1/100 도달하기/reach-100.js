const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const result = [];
result.push(1);
result.push(input);

result.push(result[0] + result[1]);
while (result[result.length - 1] < 100) {
    result.push(result[result.length - 2] + result[result.length - 1]);
}

console.log(result.join(" "));