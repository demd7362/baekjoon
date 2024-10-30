const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, ...args]) {
  n = Number(n)
  let stack = []
  let timer = 0
  let answer = 0
  for (const arg of args) {
    if (arg === '0') {
      if(stack.length){
        stack[stack.length - 1].time -= 1
        timer += 1
        if (stack[stack.length - 1].time === 0) {
          answer += stack.pop().score
        }
      }
      continue
    }
    if (timer >= n) {
      break
    }
    const [_, score, time] = arg.split(' ').map(Number)
    stack.push({score, time: time - 1})
    timer += 1
    if (stack[stack.length - 1].time === 0) {
      answer += stack.pop().score
    }
  }
  console.log(answer)
}

solution(input);
