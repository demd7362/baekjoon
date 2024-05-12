const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

function solution([n, ...args]) {
    const numbers = args.map(Number);
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number === 0) {
            answer.push('INSOMNIA');
            continue;
        }
        const set = new Set();
        for (let j = 1; j <= 10 ** 6; j++) {
            [...(number * j).toString()].forEach(numStr => set.add(numStr));
            if (set.size === 10) {
                answer.push(number * j);
                break;
            }
        }
    }
    answer = answer.map((el, idx) => `Case #${idx + 1}: ${el}`);
    console.log(answer.join('\n'));
}


solution(input);
