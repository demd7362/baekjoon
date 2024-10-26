const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim());

function solution([s, t]) {
  let target = s;
  let current = t;

  while (current.length > target.length) {
    const lastChar = current[current.length - 1];

    if (lastChar === 'A') {
      // A로 끝나면 단순히 A를 제거
      current = current.slice(0, -1);
    } else if (lastChar === 'B') {
      // B로 끝나면 B를 제거하고 뒤집기
      current = current.slice(0, -1).split('').reverse().join('');
    }
  }

  console.log(current === target ? 1 : 0);
}

solution(input)
