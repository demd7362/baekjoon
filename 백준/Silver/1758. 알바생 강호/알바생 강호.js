const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, ...args]) {
  n = Number(n)
  const getTip = (tip, index) => {
    return tip - index
  }
  const sum = args.map(Number)
    .sort((a, b) => b - a)
    .reduce((acc, tip, index) => {
      const newTip = getTip(tip, index)
      if(newTip > 0){
        return acc + newTip
      }
      return acc
    }, 0)
  console.log(sum)

}

solution(input)

