const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split('\n')
// .map(x => x.trim());


function solution(n) {
    n = Number(n);
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
    }
    console.log(dp[n].toString());
}

solution(input);
