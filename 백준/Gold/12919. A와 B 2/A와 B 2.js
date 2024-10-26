const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim());

function solution([target, curr]) {
  const bfs = () => {
    const q = [curr]
    let front = 0
    let visited = new Set()
    while(front < q.length){
      const str = q[front++]
      if(str === target){
        console.log(1)
        return
      }
      if(str.length < target.length){
        continue
      }
      if(visited.has(str)){
        continue
      }
      if(str.endsWith('A')){
        const newStr = str.slice(0, -1)
        if(!visited.has(newStr)){
          q.push(newStr)
        }
      }
      if(str.startsWith('B')){
        const newStr = str.slice(1).split('').reverse().join('')
        if(!visited.has(newStr)){
          q.push(newStr)
        }
      }
    }
    console.log(0)
  }
  bfs()
}

solution(input)


