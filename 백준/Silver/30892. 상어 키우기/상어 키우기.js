const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([nkt, args]) {
  let [n, limit, current] = nkt.split(' ').map(Number)
  const sharks = args.split(' ').map(Number)
  current = BigInt(current)
  let count = 0
  
  // 모든 상어를 정렬
  sharks.sort((a, b) => a - b)
  
  while (count < limit && sharks.length > 0) {
    let eaten = false
    
    // 현재 크기보다 작으면서 가장 큰 상어를 찾음
    for (let i = sharks.length - 1; i >= 0; i--) {
      if (current > sharks[i]) {
        current += BigInt(sharks[i])
        sharks.splice(i, 1)
        count++
        eaten = true
        break
      }
    }
    
    // 먹을 수 있는 상어가 없으면 종료
    if (!eaten) break
  }
  
  console.log(current.toString())
}

solution(input);
