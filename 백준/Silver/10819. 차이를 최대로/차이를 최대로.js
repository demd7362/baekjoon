const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, args]) {
    n = Number(n);
    const numbers = args.split(' ').map(Number);

    const seq = [];
    const visited = new Array(n).fill(false);
    let max = -Infinity;
    const dfs = (depth) => {
        if (depth === n) {
            let sum = 0;
            for (let i = 0; i < n - 1; i++) {
                sum += Math.abs(seq[i] - seq[i + 1]);
            }
            max = Math.max(max, sum);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (visited[i]) {
                continue;
            }
            visited[i] = true;
            seq[depth] = numbers[i];
            dfs(depth + 1);
            visited[i] = false;
        }
    }
    dfs(0);
    console.log(max);
}

solution(input);
