const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, ...args]) {
    n = Number(n);
    const board = args.map(arg => arg.split(' ').map(Number));
    const recurse = (x, y, n) => {
        if (n === 1) {
            return board[x][y];
        }
        n /= 2;
        const values = [
            recurse(x, y, n),
            recurse(x + n, y, n),
            recurse(x, y + n, n),
            recurse(x + n, y + n, n)
        ];

        return values.sort((a, b) => b - a)[1];
    };
    let answer = recurse(0, 0, n);
    console.log(answer);
}

solution(input);
