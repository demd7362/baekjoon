const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim());

function solution([n, ...args]) {
  const isDesc = (before) => {
    const after = [...before].sort((a, b) => b - a).join('')
    return before === after
  }
  const solve = (word) => {
    for (let i = word.length - 1; i >= 0; i--) {
      const right = word.slice(i)
      if (!isDesc(right)) {
        const left = word.slice(0, i)
        // 0이랑 right[0] 보다 높은 인덱스랑 스왑
        const target = right[0]
        const swapIndex = [...right.slice(1)].map((x, i) => ({index: i, value: x}))
          .filter(x => x.value > target)
          .sort((a, b) => a.value - b.value)[0].index + 1
        const temp = [...right];
        [temp[0], temp[swapIndex]] = [temp[swapIndex], temp[0]];
        return left + temp[0] + temp.slice(1).sort().join('')
      }
    }
    return "BIGGEST";
  }
  const ans = []
  for (const arg of args) {
    ans.push(solve(arg))
  }
  console.log(ans.join('\n'))


}

solution(input)
