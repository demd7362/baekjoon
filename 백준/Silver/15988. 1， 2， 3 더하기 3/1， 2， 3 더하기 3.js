const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, ...args]) {
  n = +n
  let dp = [0, 1, 2, 4, 7]
  const mod = 1_000_000_009
  let digits = args.map(Number)
  let max = Math.max(...digits)
  for (let i = 5; i <= max; i++) {
    dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % mod
  }
  for(const digit of digits){
    console.log(dp[digit])
  }
}


solution(input)
