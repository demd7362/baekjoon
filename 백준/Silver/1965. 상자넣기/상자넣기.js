const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, arg]) {
  n = +n
  const digits = arg.split(' ').map(Number)
  let dp = Array(n).fill(1)
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (digits[j] < digits[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(Math.max(...dp))
}


solution(input)
