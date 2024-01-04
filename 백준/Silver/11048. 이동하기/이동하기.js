const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([NM, ...args]) {
    const [N, M] = NM.split(' ').map(Number);
    const map = Array.from({length: N}, (_, i) => args[i].split(' ').map(Number));
    const dp = Array.from(Array(N), () => Array(M).fill(0));
    for(let i = 0; i<N; i++){
        for(let j = 0; j<M; j++){
            dp[i][j] = Math.max(dp[i+1]?.[j] ?? 0,dp[i]?.[j+1] ?? 0,dp[i-1]?.[j] ?? 0,dp[i]?.[j-1] ?? 0) + map[i][j];
        }
    }
    console.log(dp[N-1][M-1]);
}

solution(input);
