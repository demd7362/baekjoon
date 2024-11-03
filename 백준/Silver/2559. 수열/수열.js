const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([nk, args]) {
  const [n, k] = nk.split(' ').map(Number)
  const numbers = args.split(' ').map(Number)
  const getSum = (startIndex, endIndex) => {
    let sum = 0
    for (let i = startIndex; i < endIndex; i++) {
      sum += numbers[i]
    }
    return sum
  }
  let left = 0
  let right = k
  let sum = getSum(0, k)
  let max = sum
  while (left < n - k) {
    sum = sum - numbers[left++] + numbers[right++]
    max = Math.max(sum, max)
  }
  console.log(max)
}

solution(input)
