const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([nm, args]) {
    const [n, m] = nm.split(' ').map(Number);
    const sequence = new Array(m).fill(0);
    const numbers = [...new Set(args.split(' ').map(Number))].sort((a, b) => a - b);
    const visited = new Array(n).fill(false);
    let answer = [];
    const dfs = (depth,index) => {
        if (depth === m) {
            answer.push(sequence.join(' '));
            return;
        }
        for (let i = index; i < numbers.length; i++) {
            // if (visited[i]) {
            //     continue;
            // }
            sequence[depth] = numbers[i];
            // visited[i] = true;
            dfs(depth + 1, i);
            // visited[i] = false;
        }
    }
    dfs(0,0);
    console.log(answer.join('\n'));
}


solution(input);
