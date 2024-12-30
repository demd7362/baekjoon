const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())


function solution([ak]) {
  let [a,k] = ak.split(' ').map(Number)
  let visited = new Set()
  let bfs = (start) => {
    let q = [[0, start]]
    let front = 0
    while(q.length > front){
      let [count, current] = q[front++]
      if(current === k){
        console.log(count)
        return
      }
      if(visited.has(current)){
        continue
      }
      visited.add(current)
      if(current + 1 <= k){
        q.push([count + 1, current + 1])
      }
      if(current * 2 <= k){
        q.push([count + 1, current * 2])
      }
    }
  }
  bfs(a)
}

solution(input)
