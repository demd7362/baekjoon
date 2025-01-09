const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

// .map(x => x.trim())


function solution([n, arg]) {
  let digits = arg.split(' ').map(Number)
  let sorted = [...digits].sort((a, b) => a - b)
  let indexes = sorted.reduce((acc,val, index) => {
    acc[val] ??= index
    return acc
  }, {})
  let answer = digits.map(digit => indexes[digit]++)
  console.log(answer.join(' '))
}

solution(input)
