const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())

function solution([first,...numbers]) {
    const answer = numbers.sort((a,b) => a - b).join('\n');
    console.log(answer);
}
solution(input);