const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .split("\n")

function solution([n, args]) {
  n = +n
  let digits = args.split(' ').map(Number)
  let dp = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    let sum = 0
    for(let j = 0; j < i; j++){
      if(digits[i] > digits[j] && sum < dp[j]){
        sum = dp[j]
      }
    }
    dp[i] = sum + digits[i]
  }
  // console.log(dp)
  console.log(Math.max(...dp))
}

solution(input)
