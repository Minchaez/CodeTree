const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const numbers = Array.from({ length: 6 }, (x, y) => 0);

for (let i = 0; i < input.length; i++) {
    switch(input[i]) {
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
    }
}

for(let i = 1; i <= numbers.length; i++) {
    console.log(`${i} - ${numbers[i-1]}`);
}
