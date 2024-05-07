const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution(args) {
    const solve = (arg) => {
        const [k, ...numbers] = arg;
        const seq = new Array(6).fill(0);
        const visited = new Array(k).fill(false);
        let answer = '';
        const dfs = (depth, index) => {
            if (depth === 6) {
                answer += seq.join(' ') + '\n';
                return;
            }
            for (let i = index; i < k; i++) {
                if (visited[i]) {
                    continue;
                }
                seq[depth] = numbers[i];
                visited[i] = true;
                dfs(depth + 1, i);
                visited[i] = false;
            }
        }
        dfs(0, 0);
        console.log(answer);
    }
    for (let i = 0; i < args.length - 1; i++) {
        const arg = args[i].split(' ').map(Number);
        solve(arg);
    }
}


solution(input);
