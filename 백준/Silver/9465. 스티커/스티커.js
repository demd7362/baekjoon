const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

function solution([n, ...args]) {
  n = +n
  for (let i = 0; i < args.length; i += 3) {
    solve(+args[i], [args[i + 1].split(' ').map(Number), args[i + 2].split(' ').map(Number)])
  }
}

function solve(n, board) {
  let dp = [
    Array(n).fill(0),
    Array(n).fill(0),
    Array(n).fill(0),
  ]
  dp[0][0] = board[0][0]
  dp[1][0] = board[1][0]
  for (let i = 1; i < n; i++) {
    dp[0][i] = Math.max(dp[1][i - 1] + board[0][i], dp[2][i - 1] + board[0][i]) // 위에서 시작
    dp[1][i] = Math.max(dp[0][i - 1] + board[1][i], dp[2][i - 1] + board[1][i])  // 밑에서 시작
    dp[2][i] = Math.max(dp[0][i - 1], dp[1][i - 1]) // 안고름 
  }
  console.log(Math.max(...dp.flat()))
}


solution(input)
