const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const scores = Array(10).fill(0);

for (let i = 0; i < input.length; i++) {
    if(input[i] === 0) break;

    const tir = Math.floor(input[i] / 10);
    if(tir === 0) continue;
    scores[tir - 1]++;
}

for (let i = scores.length; i >= 1; i--) {
    console.log(`${i * 10} - ${scores[i - 1]}`)
}