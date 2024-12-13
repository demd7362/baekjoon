const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, ...args]) {
  n = +n
  let board = args.map(arg => arg.split(' ').map(Number))
  let dp = Array.from({length: n}, () => Array.from({length: n}, () => BigInt(0)))
  dp[0][0] = 1n
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const jump = board[i][j]
      if (jump === 0) {
        continue
      }
      if (i + jump < n) {
        dp[i + jump][j] += BigInt(dp[i][j])
      }
      if (j + jump < n) {
        dp[i][j + jump] += BigInt(dp[i][j])
      }
    }
  }
  console.log(dp[n - 1][n - 1].toString())
}


solution(input)
