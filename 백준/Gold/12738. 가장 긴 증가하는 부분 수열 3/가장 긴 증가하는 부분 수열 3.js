const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, arg]) {
  n = +n
  let digits = arg.split(' ').map(Number)
  let seq = []
  for (let i = 0; i < n; i++) {
    let left = 0
    let right = n - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if(seq[mid] === undefined){
        right = mid - 1
      } else if (seq[mid] < digits[i]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    seq[left] = digits[i]
  }

  console.log(seq.length)

}

solution(input)
