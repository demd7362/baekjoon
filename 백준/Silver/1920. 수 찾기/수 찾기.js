const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

function solution(args) {
    let [n, numbers, m, targets] = args;
    numbers = new Set(numbers.split(' '));
    targets = targets.split(' ');
    const answer = [];
    targets.forEach(target => {
        if (numbers.has(target)) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    })
    console.log(answer.join('\n'));
}


solution(input);
