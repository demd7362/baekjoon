const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim());

function solution([target, curr]) {
  const visited = new Set();

  const dfs = (str) => {
    if (str.length < target.length) {
      return;
    }

    if (str === target) {
      throw new Error()
    }

    if (visited.has(str)) {
      return;
    }

    visited.add(str);

    if (str.endsWith('A')) {
      const newStr = str.slice(0, -1);
      dfs(newStr);
    }

    if (str.startsWith('B')) {
      const newStr = str.slice(1).split('').reverse().join('');
      dfs(newStr);
    }
  };

  try {
    dfs(curr);
    console.log(0)
  } catch (e){
    console.log(1)
  }
}

solution(input);
