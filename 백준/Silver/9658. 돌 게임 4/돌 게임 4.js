const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n]) {
  n = +n;
  let dp = ['CY', 'SK', 'CY', 'SK', 'SK', 'SK', 'SK']
  console.log(dp[(n - 1) % dp.length])
}

solution(input)
