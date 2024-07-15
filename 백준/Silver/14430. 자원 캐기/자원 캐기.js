const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([nm, ...args]) {
    const [n, m] = nm.split(' ').map(Number);
    const origin = args.map(arg => arg.split(' ').map(Number));
    const dp = Array.from({length: 301}, () => new Array(301).fill(0))
    dp[0][0] = origin[0][0];
    let maxValue = dp[0][0];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i > 0) {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j] + origin[i][j]);
            }
            if (j > 0) {
                dp[i][j] = Math.max(dp[i][j], dp[i][j-1] + origin[i][j]);
            }
            maxValue = Math.max(maxValue, dp[i][j]);
        }
    }

    console.log(maxValue);
}

solution(input);
