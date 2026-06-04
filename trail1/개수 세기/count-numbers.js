const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let cnt = 0;
const arr = input[1].split(" ").map(Number);

for(let i = 0; i < N; i++) {
    if(arr[i] === M) cnt++;
}

console.log(cnt);
