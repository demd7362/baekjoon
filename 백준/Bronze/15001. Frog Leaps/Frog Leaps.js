const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, ...args]) {
    n = Number(n);
    let answer = 0;
    for (let i = 0; i < args.length - 1; i++) {
        let diff = Math.abs(args[i] - args[i + 1]);
        answer += diff ** 2;
    }
    console.log(answer);

}

solution(input);
