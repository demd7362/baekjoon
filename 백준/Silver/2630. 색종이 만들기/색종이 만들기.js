const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n, ...args]) {
    const papers = args.map(arg => arg.split(' ').map(Number));
    const results = [0, 0];

    const recurse = (x, y, n) => {
        if (search(x, y, n)) {
            results[papers[x][y]]++;
            return;
        }
        n /= 2;
        recurse(x, y, n);
        recurse(x + n, y, n);
        recurse(x, y + n, n);
        recurse(x + n, y + n, n);
    }
    const search = (x, y, n) => {
        const target = papers[x][y];
        for (let i = x; i < x + n; i++) {
            for (let j = y; j < y + n; j++) {
                if (target !== papers[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }
    recurse(0, 0, +n);
    results.forEach(r => console.log(r));
}


solution(input);
