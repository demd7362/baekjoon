const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, ...args]) {
  let digits = args.map(Number)
  let [dasom, ...others] = digits
  others.sort((a, b) => b - a)
  let max = others[0]
  if(max < dasom){
    console.log(0)
    return
  }
  let count = 0
  others = others.filter(x => x > dasom)
  while (max >= dasom) {
    dasom++
    count++
    others[0]--
    others.sort((a, b) => b - a)
    max = others[0]

  }
  console.log(count)
}

solution(input)
