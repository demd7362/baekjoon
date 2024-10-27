const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
// .split("\n")
// .map(x => x.trim());

function solution(input) {
  const stack = []
  const converter = {
    H: 1,
    C: 12,
    O: 16
  }

  const isNumber = (arg) => {
    return !isNaN(Number(arg))
  }
  for (const char of input) {
    if (isNumber(char)) {
      stack.push(stack.pop() * char)
    } else if (char === '(') {
      stack.push('(')
    } else if (char === ')') {
      let temp = 0
      while (true) {
        let current = stack.pop()
        if (current === '(') {
          break
        }
        temp += current
      }
      stack.push(temp)
    } else {
      stack.push(converter[char])
    }
  }
  console.log(stack.reduce((acc, val) => acc + val, 0))
}

solution(input);
