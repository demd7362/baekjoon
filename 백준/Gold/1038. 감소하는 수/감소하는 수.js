const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
// .split("\n")
// .map(x => x.trim())

function solution(n) {
  n = +n
  // 0 1 2 3 4 5 6 7 8 9 10 20 21 30 31 32 40 41 42 43
  let result = []
  let dfs = (depth, value) => {
    if (depth >= 1) {
      result.push(+value)
    }
    for (let i = 0; i <= 9; i++) {
      if (i > value[0] || value === '') {
        dfs(depth + 1, i + value)
      }
    }
  }

  dfs(0, '')
  result.sort((a, b) => a - b)
  console.log(result[n] ?? -1)

}

solution(input)
