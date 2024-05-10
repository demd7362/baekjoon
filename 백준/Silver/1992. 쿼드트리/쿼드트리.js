const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, ...args]) {
    n = Number(n);
    const map = args.map(arg => arg.split('').map(Number));
    let answer = '';

    const search = (x, y, n) => {
        const target = map[x][y];
        for (let i = x; i < x + n; i++) {
            for (let j = y; j < y + n; j++) {
                const curr = map[i][j];
                if (curr !== target) {
                    return false;
                }
            }
        }
        return true;
    }

    const recursive = (x, y, n,depth) => {
        if (search(x, y, n)) {
            answer += map[x][y];
            return;
        }
        answer += '(';
        n /= 2;
        recursive(x, y, n, depth + 1);
        recursive(x, y + n, n,depth + 1);
        recursive(x + n, y, n,depth + 1);
        recursive(x + n, y + n, n,depth + 1);
        answer += ')';
    }
    recursive(0, 0, n,0);
    console.log(answer);
}


solution(input);
