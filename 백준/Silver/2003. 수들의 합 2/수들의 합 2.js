const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([nm, args]) {
  const [n, m] = nm.split(' ').map(Number)
  const numbers = args.split(' ').map(Number)

  let count = 0
  let sum = 0
  let left = 0
  for(let right = 0; right < n; right++){
    sum += numbers[right]

    while(left < right && sum > m){
      sum -= numbers[left]
      left += 1
    }
    if(sum === m){
      count += 1
    }
  }

  console.log(count)
}

solution(input)
