const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim());

function solution([np, ...args]) {
  const [n, p] = np.split(' ').map(Number)
  const lines = {}
  let cnt = 0
  for (const arg of args) {
    const [line, fret] = arg.split(' ').map(Number)
    if (!lines[line]) {
      lines[line] = []
    }
    const stack = lines[line]
    let top = stack[stack.length - 1]
    if (!top || top < fret) {
      stack.push(fret)
      cnt += 1
      continue
    }
    while (true) {
      if (top > fret) {
        stack.pop()
        cnt += 1
        top = stack[stack.length - 1]
      } else if(top === fret){
        break
      } else {
        stack.push(fret)
        cnt += 1
        break
      }
    }
  }
  console.log(cnt)

}

solution(input);
