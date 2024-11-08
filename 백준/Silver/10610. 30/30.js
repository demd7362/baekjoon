const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
// .split("\n")
// .map(x => x.trim())

function solution(input) {
  const digits = input.split('').map(Number);
  const sum = digits.reduce((acc, curr) => acc + curr, 0);

  if (!digits.includes(0)) { // 10의 배수 체크
    console.log(-1);
    return;
  }
  if (sum % 3 !== 0) { // 모든 자릿수의 합이 3의 배수면 그 수는 3의 배수
    console.log(-1);
    return;
  }
  const sortedDigits = digits.sort((a, b) => b - a);

  console.log(sortedDigits.join(''));
}

solution(input)
