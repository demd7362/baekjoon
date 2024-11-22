const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, ...args]) {
  n = Number(n)
  args = args.map(Number)
  args.sort((a, b) => b - a)

  let maxWeight = 0
  for (let i = 0; i < n; i++) {
    maxWeight = Math.max(maxWeight, args[i] * (i + 1))
  }

  console.log(maxWeight)

}

solution(input)

