const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution(args) {
    const set = new Set();
    for (const arg of args) {
        const value = arg % 42;
        set.add(value);
    }
    console.log(set.size);
}

solution(input);
