const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, args]) {
  n = +n
  let digits = args.split(' ').map(Number)
  let dp = Array(1001).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < n; i++) {
    if (digits[i] === 0) {
      continue
    }
    for (let j = i + 1; j <= i + digits[i]; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1)
    }
  }
  console.log(dp[n - 1] === Infinity ? -1 : dp[n - 1])
}


solution(input)
