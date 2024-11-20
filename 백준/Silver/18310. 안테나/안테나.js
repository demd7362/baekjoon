const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, arg]) {
  n = Number(n)
  let args = arg.split(' ').map(Number).sort((a, b) => a - b)
  console.log(args[Math.floor((n - 1) / 2)])

}

solution(input)

