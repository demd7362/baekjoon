const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(nm) {
    const [n, m] = nm.split(' ').map(Number);
    const visited = new Array(n).fill(false);
    const sequence = new Array(m).fill(0);
    let answer = '';
    const dfs = (index,depth) => {
        if (depth === m) {
            answer += `${sequence.join(' ')}\n`;
            return;
        }

        for (let i = index; i <= n; i++) {
            sequence[depth] = i;
            dfs(i,depth + 1);
        }
    }
    dfs(1,0);
    console.log(answer);
}


solution(input);
