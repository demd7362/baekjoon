const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

// .map(x => x.trim())


function solution([nk, arg]) {
  let digits = arg.split(' ').map(Number)
  let [n, k] = nk.split(' ').map(Number)
  let max = 0
  for (let i = 0; i < n; i++) {
    let current = digits[i]
    let use = k
    let count = 1
    for (let j = i + 1; j < n; j++) {
      if (current !== digits[j]) {
        if (use > 0) {
          use -= 1
        } else break
      } else count++
    }
    max = Math.max(max, count)
  }
  console.log(max)

}

solution(input)
