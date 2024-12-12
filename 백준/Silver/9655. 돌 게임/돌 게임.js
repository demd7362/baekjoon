const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  // .trim()
  // .split("\n")


function solution(n) {
  n = +n
  console.log(n % 2 === 0 ? 'CY' : 'SK')
}


solution(input)
