const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())


function solution([n]) {
  n = +n
  console.log(n % 2 === 1 ? 'SK' : 'CY')
}

solution(input)
