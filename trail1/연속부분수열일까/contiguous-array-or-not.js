const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N1, N2] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let found = false;

// A배열에서 B배열 크기만큼 뺀 인덱스까지 검사
// A배열의 마지막 부분에 B배열이 연속부분수열로서 들어갈 수 있으니까
for (let i = 0; i <= N1 - N2; i++) {
    // A[i]부터 시작해서 B 전체와 비교
    let match = true;
    for (let j = 0; j < N2; j++) {
        if (A[i + j] !== B[j]) {
            match = false;
            break;
        }
    }
    if (match) {
        found = true;
        break;
    }
}

console.log(found ? "Yes" : "No");