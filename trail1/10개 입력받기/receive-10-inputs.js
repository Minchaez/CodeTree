const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sum = 0;
let avg = 0;
let cnt = 0;
for(let i = 0; i < input.length; i++) {
    if(input[i] === 0){
        cnt = i;
        break;
    }
    sum += input[i];
}
if(cnt !== 0) {
    avg = sum / cnt;
} else {
    avg = sum / input.length;
}
console.log(sum, avg.toFixed(1));