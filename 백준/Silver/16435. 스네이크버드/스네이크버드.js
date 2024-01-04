const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([NL, arg]) {
    let [N, L] = NL.split(' ').map(Number);
    const fruits = arg.split(' ').map(Number).sort((a, b) => a - b);

    for (const fruit of fruits) {
        if (L >= fruit) {
            L++;
        } else {
            break;
        }
    }
    console.log(L);
}

solution(input);
