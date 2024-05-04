const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(nm) {
    const [n, m] = nm.split(' ').map(Number);
    // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
    const visited = new Array(n).fill(false);
    const sequence = new Array(n).fill(0);
    let answer = [];
    const dfs = (x) => {
        if (x === m) {
            const arr = [];
            for(let i = 0; i<m; i++){
                arr.push(sequence[i]);
            }
            answer.push(arr);
            return;
        }
        for (let i = 1; i <= n; i++) {
            if (visited[i]) {
                continue;
            }
            visited[i] = true;
            sequence[x] = i;
            dfs(x + 1);
            visited[i] = false;
        }
    }
    dfs(0);
    answer.forEach(x => console.log(x.join(' ')));
}


solution(input);
