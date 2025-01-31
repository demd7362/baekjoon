const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([nk, ...args]) {
  let [n, k] = nk.split(" ").map(Number)
  let dp = Array(10001).fill(Infinity) // i원에 사용한 동전의 최소 갯수
  let coins = args.map(Number) // k원을 만들어야함
  coins.sort((a, b) => a - b)
  dp[0] = 0
  for (let i = 1; i <= k; i++) {
    for (let coin of coins) {
      if(i - coin < 0){
        break
      }
      dp[i] = Math.min(dp[i - coin] + 1, dp[i])
    }
  }
  // console.log(dp.slice(0, k + 1))
  console.log(dp[k] === Infinity ? -1 : dp[k])
}

solution(input)
