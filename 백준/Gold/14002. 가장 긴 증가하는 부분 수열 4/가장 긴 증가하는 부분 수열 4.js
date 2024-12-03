const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .split("\n")

function solution([n, args]) {
  n = +n
  let digits = args.split(' ').map(Number)
  let dp = []
  for (let i = 0; i < n; i++) {
    if(i === n - 1) debugger
    let count = 0
    let elements = []
    for (let j = 0; j < i; j++) {
      if (digits[i] > digits[j] && count < dp[j].count) {
        count = dp[j].count
        elements = [...dp[j].elements]
      }
    }
    elements.push(digits[i])
    dp[i] = {
      elements,
      count: count + 1
    }
  }
  let max = 0
  let maxIndex = 0
  for(let i = 0; i < n; i++){
    if(max < dp[i].count){
      max = dp[i].count
      maxIndex = i
    }
  }
  console.log(max)
  console.log(dp[maxIndex].elements.join(' '))
}

solution(input)
