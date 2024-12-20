const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

function solution([n]) {
  n = +n
  let number = n.toString()
  let len = number.length
  let visited = Array(len).fill(false)
  let seq = []
  let set = new Set()
  let dfs = (depth) => {
    if(depth === len){
      set.add(+seq.join(''))
      return
    }
    for (let i = 0; i < len; i++) {
      if (visited[i]) {
        continue
      }
      visited[i] = true
      seq[depth] = +number[i]
      dfs(depth + 1)
      visited[i] = false
    }
  }
  dfs(0)
  let sorted = [...set].sort((a,b) => a - b)
  for(let i = 0; i < sorted.length; i++){
    if(sorted[i] === n){
      console.log(sorted[i + 1] ?? 0)
      return
    }
  }
}


solution(input)
