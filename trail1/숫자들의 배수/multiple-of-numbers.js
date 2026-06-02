const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());
// 결과 담는 배열
const result = [];

let idx = 1;

// 2가 되면 종료하는 트리거 변수
let cnt = 0;

while (cnt < 2) {
    result.push(Number(input) * idx);
    idx++;
    if (result[result.length - 1] % 5 === 0) {
        cnt++;
    }
}

console.log(result.join(" "));
