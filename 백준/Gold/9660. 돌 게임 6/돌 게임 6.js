const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())


function solution([n]) {
  n = +n
  let dp = ['SK', 'CY', 'SK', 'SK', 'SK', 'SK', 'CY']
  console.log(dp[(n - 1) % 7])

}

solution(input)
