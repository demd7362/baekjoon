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
  digits.sort((a, b) => a - b)
  let left = 0
  let right = n - 1
  let min = Infinity
  let ans = []
  while (left < right) {
    let sum = Math.abs(digits[left] + digits[right])
    if(sum < min){
      min = sum
      ans = [digits[left], digits[right]]
    }
    if (Math.abs(digits[left]) >= Math.abs(digits[right])) {
      left += 1
    } else {
      right -= 1
    }
  }
  console.log(ans.join(' '))

}

solution(input)
