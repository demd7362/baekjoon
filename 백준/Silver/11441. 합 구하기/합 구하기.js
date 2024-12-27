const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, digits, ...args]) {
  n = +n
  digits = digits.split(' ').map(Number)
  let [m, ...arg] = args
  m = +m
  arg = arg.map(x => x.split(' ').map(Number))
  let dp = [digits[0]]
  for(let i = 1; i < n; i++){
    dp[i] = dp[i - 1] + digits[i]
  }
  for(let i = 0; i < m ; i++){
    let [left, right] = arg[i]
    console.log(dp[right - 1] - (dp[left - 2] ?? 0))
  }
}

solution(input)
