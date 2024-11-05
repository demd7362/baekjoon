const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([nk, args]) {
  const [n, k] = nk.split(' ').map(Number)
  const numbers = args.split(' ').map(Number) // 1 라이언 2 어피치
  const window = {
    '1': 0,
    '2': 0
  }
  let right = 0
  let min = Infinity
  for (let left = 0; left < n; left++) {
    while (window['1'] < k && right < n) {
      window[numbers[right++]]++
    }
    if (window['1'] === k) {
      min = Math.min(min, window['1'] + window['2'])
    }
    window[numbers[left]]--
  }
  console.log(min === Infinity ? -1 : min)
}

solution(input)
