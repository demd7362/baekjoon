const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
// .split("\n")
// .map(x => x.trim());

function solution(input) {
  const isNumber = str => {
    return !isNaN(Number(str))
  }
  let stack = []
  const calculate = {
    '*'(arg1, arg2) {
      return arg1 * arg2
    },
    '/'(arg1, arg2) {
      return Math.floor(arg1 / arg2)
    },
    '+'(arg1, arg2) {
      return arg1 + arg2
    },
    '-'(arg1, arg2) {
      return arg1 - arg2
    }
  }
  for(const char of input){
    if(isNumber(char)){
      stack.push(Number(char))
      continue
    }
    let arg1 = stack.pop()
    let arg2 = stack.pop()
    let result = calculate[char](arg2,arg1)
    stack.push(result)
  }


  console.log(stack[0])
}

solution(input);
