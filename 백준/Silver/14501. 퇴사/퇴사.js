const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, ...args]) {
  n = +n
  let counsels = args.map(arg => arg.split(' ').map(Number))
  let max = 0
  let dfs = (index, sum) => {
    max = Math.max(sum, max)
    for (let i = index; i < n; i++) {
      const [period, profit] = counsels[i]
      if (i + period > n) {
        continue
      }
      dfs(i + period, sum + profit)
    }
  }
  dfs(0, 0)
  console.log(max)
}

solution(input)
