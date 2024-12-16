const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, ...args]) {
  n = +n
  for (let i = 0; i < n * 2; i += 2) {
    solve(+args[i], args[i + 1].split(' ').map(Number))
  }
}

const solve = (n, stocks) => {
  let sum = 0
  for(let i = n - 1; i >= 0; i--){
    let current = stocks[i]
    let count = 0
    for(let j = i - 1; j >= 0; j--){
      let target = stocks[j]
      if(target < current){
        sum += current - target
        count++
      } else break
    }
    i -= count
  }
  console.log(sum)
}

solution(input)
