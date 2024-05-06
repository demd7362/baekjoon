const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([nm, args]) {
    const [n, m] = nm.split(' ').map(Number);
    // const visited = new Array(n).fill(false);
    const sequence = new Array(m).fill(0);
    const numbers = args.split(' ').map(Number).sort((a, b) => a - b);
    let answer = '';
    const dfs = (depth) => {
        if (depth === m) {
            answer += `${sequence.join(' ')}\n`;
            return;
        }
        for (let i = 0; i < n; i++) {
            sequence[depth] = numbers[i];
            dfs(depth + 1);
        }
    }
    dfs(0,0);
    console.log(answer);
}


solution(input);
