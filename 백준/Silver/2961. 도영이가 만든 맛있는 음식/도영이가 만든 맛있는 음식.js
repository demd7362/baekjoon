const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, ...args]) {
  n = +n
  args = args.map(arg => arg.split(' ').map(Number))
  let min = Infinity
  let dfs = (index, a, b) => {
    if(index !== 0){
      min = Math.min(min, Math.abs(a - b))
    }
    for (let i = index; i < n; i++) {
      const [newA, newB] = args[i]
      dfs(i + 1, a * newA, b + newB)
    }
  }
  dfs(0, 1, 0)
  console.log(min)
}


solution(input)
