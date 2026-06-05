const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, Q] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const commands = input.slice(2);

for (let i = 0; i < commands.length; i++) {
    const [cmd, ...etc] = commands[i].split(" ").map(Number);

    if (cmd === 1) {
        console.log(arr[etc[0] - 1]);
    } else if (cmd === 2) {
        let found = false;
        for (let j = 0; j < N; j++) {
            if (arr[j] === etc[0]) {
                console.log(j + 1);
                found = true;
                break;
            }
        }
        if (!found) console.log(0);
    } else {
        const [s, e] = etc;
        let result = [];
        for (let i = s; i <= e; i++) {
            result.push(arr[i - 1]);
        }
        console.log(result.join(" "));
    }
}