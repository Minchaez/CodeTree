const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const cases = Array(4).fill(0);

let cnt = 0;

for (let i = 0; i < input.length; i++) {
    const [bool, t] = input[i].split(" ");
    
    let temp = t;
    
    if (bool === "Y" && temp >= 37) {
        cases[0]++;
        cnt++;
    } else if (bool === "N" && temp >= 37) {
        cases[1]++;
    } else if (bool === "Y" && temp < 37) {
        cases[2]++;
    } else {
        cases[3]++;
    }

}

if (cnt === 2) {
    cases.push("E")
}

console.log(cases.join(" "));