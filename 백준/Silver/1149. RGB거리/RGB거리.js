const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n, ...args]) {
    const dp = args.map(arg => arg.split(' ').map(Number));
    for (let i = 0; i < n - 1; i++) {
        dp[i + 1][0] += Math.min(dp[i][1], dp[i][2]);
        dp[i + 1][1] += Math.min(dp[i][0], dp[i][2]);
        dp[i + 1][2] += Math.min(dp[i][1], dp[i][0]);
    }
    console.log(Math.min(...dp[n-1]));
}


solution(input);
