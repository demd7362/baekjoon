const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, input, ...numbers]) {
  const isNumber = str => {
    return !isNaN(Number(str))
  }
  const chars = []
  for (const char of input) {
    if(char >= 'A' && char <= 'Z'){
      chars.push(numbers[char.charCodeAt(0) - 65])
    } else {
      chars.push(char)
    }
  }
  const calculate = {
    '*'(arg1, arg2) {
      return arg1 * arg2
    },
    '+'(arg1, arg2) {
      return arg1 + arg2
    },
    '-'(arg1, arg2) {
      return arg1 - arg2
    },
    '/'(arg1, arg2) {
      return arg1 / arg2
    }
  }
  let stack = []
  for (const char of chars) { // 두자리 이상 숫자는 한자릿수로 구분됨 10 + 10 -> 1, 0, + , 1, 0
    if (isNumber(char)) {
      stack.push(Number(char))
      continue
    }
    let second = stack.pop()
    let first = stack.pop()
    const result = calculate[char](first, second)
    stack.push(result)
  }
  console.log(stack[0].toFixed(2))
}

solution(input);
