const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, ...args]) {
  n = +n
  let damages = args[0].split(' ').map(Number)
  let delights = args[1].split(' ').map(Number)
  let max = 0
  let dfs = (hp, index, delight) => {
    max = Math.max(delight, max)
    for (let i = index; i < n; i++) {
      if (hp - damages[i] > 0) {
        dfs(hp - damages[i], i + 1, delight + delights[i])
      }
    }
  }
  dfs(100, 0, 0)
  console.log(max)
}


solution(input)
