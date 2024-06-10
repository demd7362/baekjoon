const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, symbols]) {
    n = Number(n);
    symbols = symbols.split(' ');
    let seq = [];
    let numbers = Array.from({length: 10}, (_, i) => i);
    let visited = new Array(n).fill(false);
    let max = -Infinity;
    let min = Infinity;
    let maxStr = '';
    let minStr = '';
    let functions = {
        '>': (arg1, arg2) => arg1 > arg2,
        '<': (arg1, arg2) => arg1 < arg2
    }
    const dfs = (depth) => {
        if (depth === n + 1) {
            let str = '';
            for (let i = 0; i < n; i++) {
                let bool = functions[symbols[i]](seq[i], seq[i + 1]);
                if (bool) {
                    str += seq[i];
                } else return;
            }
            str += seq[n];
            let toNumber = Number(str);
            if (max < toNumber) {
                maxStr = str;
                max = toNumber;
            }
            if (min > toNumber) {
                minStr = str;
                min = toNumber;
            }
            return;
        }
        for (let i = 0; i < 10; i++) {
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
    console.log(maxStr);
    console.log(minStr);
}

solution(input);
