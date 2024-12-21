const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

function solution([n,m, arg]) {
  n = +n
  m = +m
  const digits = arg.split(' ').map(Number)
  let count = 0
  let visited = Array(n).fill(false)
  let dfs = (index,depth, sum) => {
    if(depth === 2){
      if(sum === m){
        count++
      }
      return
    }
    for(let i = index; i < n; i++){
      if(visited[i]){
        continue
      }
      visited[i] = true
      dfs(i, depth + 1, sum + digits[i])
      visited[i] = false
    }
  }
  dfs(0,0,  0)
  console.log(count)
}


solution(input)
