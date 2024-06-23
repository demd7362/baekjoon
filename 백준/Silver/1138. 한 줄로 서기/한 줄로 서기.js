const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, args]) { // 4 2 1 3
    n = Number(n)
    const numbers = args.split(' ').map(Number);
    let line = []
    for (let i = 0; i < n; i++) {
        let count = numbers[i];
        for (let j = 0; j < n; j++) {
            if (count === 0 && !line[j]) {
                line[j] = i + 1;
                break;
            }
            if (!line[j]) {
                count--;
            }
        }
    }
    console.log(line.join(' '))
}

solution(input);
