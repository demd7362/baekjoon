const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())


function solution([n, args]) {
  let digits = args.split(' ').map(Number)
  n = +n
  let increase = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    let count = 0
    for (let j = 0; j < i; j++) {
      if (digits[i] > digits[j]) {
        count = Math.max(count, increase[j]) // count++?
      }
    }
    increase[i] = count + 1
  }
  let decrease = Array(n).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    let count = 0
    for (let j = i + 1; j < n; j++) {
      if (digits[i] > digits[j]) {
        count = Math.max(count, decrease[j])
      }
    }
    decrease[i] = count + 1
  }
  let result = Math.max(...Array.from({length: n}, (_, i) => increase[i] + decrease[i] - 1))
  console.log(result)


}

solution(input)
