const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([ab, nm, ...args]) {
  let [a, b] = ab.split(' ').map(Number)
  let [n, m] = nm.split(' ').map(Number)
  let graph = args.reduce((acc, arg) => {
    let [curr, target] = arg.split(' ').map(Number)
    if (!acc[curr]) {
      acc[curr] = new Set()
    }
    acc[curr].add(target)
    if (!acc[target]) {
      acc[target] = new Set()
    }
    acc[target].add(curr)
    return acc
  }, {})
  let bfs = (start, target) => {
    let q = [{
      node: start,
      count: 0
    }]
    let front = 0
    let visited = Array(n + 1).fill(false)
    while (front < q.length) {
      let {node: curr, count} = q[front++]
      if(visited[curr]){
        continue
      }
      visited[curr] = true
      if (curr === target) {
        console.log(count)
        process.exit()
      }
      let set = graph[curr]
      for (let node of set) {
        q.push({
          node,
          count: count + 1
        })
      }
    }
  }
  bfs(a, b)
  console.log(-1)

}

solution(input)
