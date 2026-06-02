const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
// 나머지 저장하는 배열
let [A, B] = input;
const spares = Array(B).fill(0);

// A가 1 이하가 되기 전까지 반복
while (A > 1) {
    const spare = A % B;      // 나머지 구하기
    spares[spare]++;          // 등장 횟수 증가 (인덱스 그대로 사용)
    
    A = Math.floor(A / B);    // A에 몫을 새로 저장 (A 갱신)
}

let sum = 0;

// 나온 횟수에 따른 제곱 수 더하기 로직
// ex) 0이 1번, 2가 2번, 3이 2번 => 1 + 2**2 + 2**2 = 9
for (let i = 0; i < spares.length; i++) {
    if (spares[i] === 0) continue;

    sum += spares[i] ** 2;
}

console.log(sum);