const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, ...args]) {
  const digits = args.map(Number).sort((a, b) => a - b)
  let sum = 0
  for (let i = 0; i < digits.length; i++) {
    let diff = Math.abs(digits[i] - (i + 1))
    sum += diff
  }
  console.log(sum)
}

solution(input)

