const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .split('\n')
    // .map(x => x.trim())
function solution(formula) {
    let parts = formula.split('-');
    let sum = 0;

    sum += parts[0].split('+').reduce((acc, val) => acc + parseInt(val), 0);

    for (let i = 1; i < parts.length; i++) {
        sum -= parts[i].split('+').reduce((acc, val) => acc + parseInt(val), 0);
    }

    console.log(sum);
}

solution(input);
