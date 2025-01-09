const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

// .map(x => x.trim())


function solution([n, arg]) {
  n = +n
  let digits = arg.split(' ').map(Number)
  let sorted = [...digits].sort((a, b) => a - b)
  let visited = Array(1001).fill(0)
  let answer = []
  for(let i = 0; i < n; i++){
    let index = sorted.findIndex(x => x === digits[i])
    answer.push(index + visited[digits[i]])
    visited[digits[i]]++
  }
  console.log(answer.join(' '))
}

solution(input)
