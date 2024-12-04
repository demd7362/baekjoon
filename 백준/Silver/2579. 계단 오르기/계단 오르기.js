const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, ...args]) {
  n = +n
  let digits = args.map(Number)
  let dp = Array(n).fill(0)
  if (n === 1) {
    console.log(digits[0])
    return
  }
  if (n === 2) {
    console.log(digits[0] + digits[1])
    return
  }
  dp[0] = digits[0]
  dp[1] = digits[0] + digits[1]
  dp[2] = Math.max(dp[0], digits[1]) + digits[2]
  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3] + digits[i - 1]) + digits[i]
  }
  console.log(dp[n - 1])
  // console.log(dp)
}

solution(input)
