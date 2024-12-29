const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())


function solution([n]) {
  n = +n
  let dp = ['CY', 'SK', 'CY', 'SK', 'SK']
  for (let i = 5; i <= n; i++) {
    if (dp[i - 1] === 'CY' || dp[i - 3] === 'CY' || dp[i - 4] === 'CY') {
      dp[i] = 'SK'
    } else {
      dp[i] = 'CY'
    }
  }
  console.log(dp[n])

}

solution(input)
