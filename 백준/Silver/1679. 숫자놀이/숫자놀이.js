const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

function solution([n, args, limit]) {
  const digits = args.split(' ').map(Number);
  limit = Number(limit);

  const bfs = (target) => {
    let q = [{current: 0, depth: 0}];
    let visited = new Set([0]); // 이미 방문한 값들
    let front = 0;
    while (front < q.length) {
      const {current, depth} = q[front++];

      if (current === target) return true;

      if (depth >= limit) continue;

      for (const digit of digits) {
        const nextValue = current + digit;
        if (!visited.has(nextValue)) {
          visited.add(nextValue);
          q.push({current: nextValue, depth: depth + 1});
        }
      }
    }
    return false;
  };

  let target = 1;
  while (true) {
    if (!bfs(target)) {
      console.log(`${target % 2 === 0 ? 'holsoon' : 'jjaksoon'} win at ${target}`);
      break;
    }
    target++;
  }
}


solution(input)
