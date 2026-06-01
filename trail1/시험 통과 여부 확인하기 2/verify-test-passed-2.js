const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = input[0];
let arr = input.slice(1);
// 성공한 학생 수
let cnt = 0;
let result = [];

for(let i = 0; i < n; i++) {
    let sum = 0;
    const [a, b, c, d] = arr[i].split(" ").map(Number);
    sum = a + b + c + d;
    if(sum / 4 >= 60) {
        cnt++;
        result.push("pass");
    } else {
        result.push("fail");
    }
}

console.log(result.join("\n"));
console.log(cnt);
