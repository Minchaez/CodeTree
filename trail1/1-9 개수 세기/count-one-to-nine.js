const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const numbers = Array.from({ length: 9 }, (x, y) => 0);

for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
        case 1:
            numbers[0]++;
            break;
        case 2:
            numbers[1]++;
            break;
        case 3:
            numbers[2]++;
            break;
        case 4:
            numbers[3]++;
            break;
        case 5:
            numbers[4]++;
            break;
        case 6:
            numbers[5]++;
            break;
        case 7:
            numbers[6]++;
            break;
        case 8:
            numbers[7]++;
            break;
        case 9:
            numbers[8]++;
            break;
    }
}

console.log(numbers.join("\n"));