const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
// .split("\n")
// .map(x => x.trim())

function solution(n) {
  n = +n;
  let result = [];

  const dfs = (depth, value, last) => {
    if (depth >= 1) {
      result.push(+value);
    }
    for (let i = last - 1; i >= 0; i--) {
      dfs(depth + 1, value + i, i);
    }
  };

  for (let i = 9; i >= 0; i--) {
    dfs(1, i.toString(), i);
  }

  result.sort((a, b) => a - b);
  console.log(result[n] ?? -1);
}

solution(input)
