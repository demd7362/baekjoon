const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, args]) {
  n = Number(n)
  const digits = args.split(' ').map(Number)
  const sum = digits.reduce((acc, val) => acc + val, 0)
  const set = new Set()
  const dfs = (depth, current) => {
    if (depth === n) {
      if(current > 0){
        set.add(current)
      }
      return
    }
    dfs(depth + 1, current + digits[depth])
    dfs(depth + 1, current)
  }
  dfs(0,0)
  // console.log(set) // 2, 6 불가
  console.log(sum - set.size)
}

solution(input)

