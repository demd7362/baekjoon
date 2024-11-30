const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()

// .split("\n")

function solution(n) {
  n = +n
  let dp = [1, 3]
  for (let i = 2; i < n; i++) {
    dp[i] = (2 * dp[i - 2] + dp[i - 1]) % 10007
  }
  console.log(dp[n - 1])
}

solution(input)
