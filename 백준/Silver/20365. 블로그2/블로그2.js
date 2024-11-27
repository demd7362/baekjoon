const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, args]) {
  n = Number(n)
  let currentGroup = args[0]
  let blueGroup = 0, redGroup = 0
  for (let i = 1; i < n + 1; i++) {
    let char = args[i]
    if (currentGroup !== char) {
      if (currentGroup === 'B') {
        blueGroup++
      } else if (currentGroup === 'R') {
        redGroup++
      }
      currentGroup = char
    }

  }

  console.log(Math.min(blueGroup, redGroup) + 1)
}

solution(input)

