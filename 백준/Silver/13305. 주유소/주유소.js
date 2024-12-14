const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, ...args]) {
  n = +n
  let distances = args[0].split(' ').map(BigInt)
  let costs = args[1].split(' ').map(BigInt)
  let sum = 0n
  let lowCost = costs[0]
  for(let i = 0; i < n - 1; i++){
    sum += lowCost * distances[i]
    if(lowCost > costs[i + 1]){
      lowCost = costs[i + 1]
    }
  }
  console.log(sum.toString())
}


solution(input)
