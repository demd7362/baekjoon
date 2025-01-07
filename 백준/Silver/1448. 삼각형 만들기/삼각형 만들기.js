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
  for (let i = n - 1; i >= 2; i--) {
    let result = isTriangle(digits[i - 2], digits[i - 1], digits[i])
    if (result) {
      return digits[i] + digits[i - 1] + digits[i - 2]
    }
  }
  return -1
}

console.log(solution(input))
