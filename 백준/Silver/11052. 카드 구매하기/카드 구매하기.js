const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, arg]) {
  n = +n
  let cards = arg.split(' ').map(Number)
  let dp = Array(n + 1).fill(0) // n개의 최대금액을 저장할 배열
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      let price = cards[j - 1]
      dp[i] = Math.max(dp[i - j] + price, dp[i])
    }
  }
  console.log(dp[n])
}

solution(input)
