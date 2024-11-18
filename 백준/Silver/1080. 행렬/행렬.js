const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([nm, ...args]) {
  const [n, m] = nm.split(' ').map(Number)
  const matrixA = args.slice(0, n).map(row => row.split('').map(Number))
  const matrixB = args.slice(n).map(row => row.split('').map(Number))
  const result = matrixA.map(row => [...row])
  const flip = (x, y) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i + x < n && j + y < m) {
          result[i + x][j + y] = 1 - result[i + x][j + y]
        }
      }
    }
  }
  let count = 0
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      if(result[i][j] !== matrixB[i][j]){
        flip(i,j)
        count += 1
      }
    }
  }
  console.log(result.join('') === matrixB.join('') ? count : -1)
}

solution(input)

