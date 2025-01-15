const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

function solution([n, args, limit]) {
  const digits = args.split(' ').map(Number);
  limit = Number(limit);
  const dp = Array(1001).fill(Infinity);
  dp[0] = 0; 

  for (let digit of digits) {
    for (let i = digit; i < dp.length; i++) {
      dp[i] = Math.min(dp[i], dp[i - digit] + 1);
    }
  }

  let i = 1;

  // 게임 진행
  while (i <= dp.length) {
    if (dp[i] > limit) {
      if (i % 2 === 0) {
        return `holsoon win at ${i}`;
      } else {
        return `jjaksoon win at ${i}`;
      }
    }
    i++;
  }
}

console.log(solution(input))
