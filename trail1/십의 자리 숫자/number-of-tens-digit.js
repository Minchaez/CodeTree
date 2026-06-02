const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const count = Array(9).fill(0);

for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) break;

    let tenth = 0;
    tenth = Math.floor(input[i] / 10);
    if (tenth === 0) {
        continue;
    } else {
        count[tenth - 1]++;
    }
}

for (let i = 1; i <= count.length; i++) {
    console.log(`${i} - ${ count[i - 1]}`);
}