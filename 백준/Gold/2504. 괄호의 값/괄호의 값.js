const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
// .split("\n")
// .map(x => x.trim());

function solution(input) {
  if (input.includes('[)') || input.includes('(]')) {
    console.log(0)
    return
  }
  const stack = []
  const isNumber = (char) => {
    return !isNaN(Number(char))
  }
  for (const char of input) {
    switch (char) {
      case '(':
      case '[': {
        stack.push(char)
        break
      }
      case ')':
      case ']': {
        let temp = 0
        let reverse = char === ')' ? '(' : '['
        let multiple = char === ')' ? 2 : 3
        if(!stack.includes(reverse)){
          console.log(0)
          return
        }
        while (stack.length) {
          const lastChar = stack.pop()
          if (isNumber(lastChar)) {
            temp += Number(lastChar)
          } else if (lastChar === reverse) {
            temp = temp === 0 ? temp + multiple : temp * multiple
            stack.push(temp)
            break
          }
        }
      }

    }
  }
  let sum = 0
  for(const char of stack){
    if(!isNumber(char)){
      console.log(0)
      return
    }
    sum += char
  }
  console.log(sum)
}

solution(input);
