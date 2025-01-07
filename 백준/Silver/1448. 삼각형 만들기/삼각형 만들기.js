const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

// .map(x => x.trim())


function solution([n, ...args]) {
  n = +n
  let digits = args.map(Number).sort((a, b) => a - b)

  function isTriangle(a, b, max) {
    return a + b > max
  }

  let max = -1
  for (let i = 0; i < n - 2; i++) {
    let result = isTriangle(digits[i], digits[i + 1], digits[i + 2])
    if (result) {
      max = Math.max(digits[i] + digits[i + 1] + digits[i + 2])
    }
  }
  console.log(max)
}

solution(input)
