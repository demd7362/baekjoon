const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split('\n')
// .map(x => x.trim())
// .map(Number);

function solution(n) {
    const goal = Number(n);
    const dp = new Array(goal + 1).fill(Infinity);
    dp[1] = 0;


    for (let i = 2; i <= goal; i++) {
        dp[i] = dp[i - 1] + 1;
        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }
        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
    }
    console.log(dp[goal]);

}

solution(input);