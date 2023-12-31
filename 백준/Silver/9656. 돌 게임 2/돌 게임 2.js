const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution(n) {
    n = Number(n);
    console.log(n % 2 === 0 ? 'SK' : 'CY');
}

solution(input);
