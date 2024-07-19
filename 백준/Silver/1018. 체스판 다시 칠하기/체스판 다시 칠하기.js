const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([nm, ...args]) {
    const [n, m] = nm.split(' ').map(Number);
    let board = args.map(arg => arg.split(''));

    function check(x, y) {
        let white = 0;
        let black = 0;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    if (board[x + i][y + j] !== 'W') white++;
                    if (board[x + i][y + j] !== 'B') black++;
                } else {
                    if (board[x + i][y + j] !== 'B') white++;
                    if (board[x + i][y + j] !== 'W') black++;
                }
            }
        }

        return Math.min(white, black);
    }

    let min = Infinity;
    for (let i = 0; i <= n - 8; i++) {
        for (let j = 0; j <= m - 8; j++) {
            let result = check(i, j);
            min = Math.min(min, result)
        }
    }
    console.log(min)
}

solution(input);
