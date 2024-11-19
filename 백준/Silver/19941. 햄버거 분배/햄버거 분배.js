const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([nk, arg]) {
  arg = [...arg]
  const [n, k] = nk.split(' ').map(Number)
  let result = 0
  loop:
    for (let i = 0; i < arg.length; i++) {
      if(i===8)debugger
      let c = arg[i]
      if (c === 'P') {
        for (let j = i - k; j < i; j++) { 
          let target = arg[j]
          if (target === 'H') {
            arg[j] = 'X'
            result++
            continue loop
          }
        }
        for(let j = i + 1; j <= i + k; j++){
          let target = arg[j]
          if (target === 'H') {
            arg[j] = 'X'
            result++
            continue loop
          }
        }
      }
    }
  console.log(result)
}

solution(input)

