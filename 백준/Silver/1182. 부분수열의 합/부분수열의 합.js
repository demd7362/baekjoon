const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([ns, args]) {
    const [n, s] = ns.split(' ').map(Number);
    const numbers = args.split(' ').map(Number);
    const seq = new Array(n+1).fill(0);

    const getSum = (arr) => {
        return arr.reduce((acc, num) => acc + num, 0);
    }
    let count = 0;
    const dfs = (depth, index, targetDepth, visited = new Array(n).fill(false)) => {
        if (depth === targetDepth) {
            const sum = getSum(seq);
            if (sum === s) {
                count++;
            }
            return;
        }
        for (let i = index; i < n; i++) {
            if (visited[i]) {
                continue;
            }
            seq[depth] = numbers[i];
            visited[i] = true;
            dfs(depth + 1, i, targetDepth, visited);
            visited[i] = false;
        }
    }
    for (let i = 1; i <= n; i++) {
        dfs(0, 0, i);
    }
    console.log(count);
}


solution(input);
