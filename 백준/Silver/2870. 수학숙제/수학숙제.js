const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, ...args]) {
  const isNumber = (str) => {
    return !isNaN(Number(str))
  }
  const parse = (word) => {
    let numStr = ''
    const parsed = []
    for (const char of word) {
      if (isNumber(char)) {
        numStr += char
      } else {
        if (numStr) {
          parsed.push(numStr)
          numStr = ''
        }
      }
    }
    if (numStr) {
      parsed.push(numStr)
    }
    return parsed.map(BigInt)
  }
  const result = []
  for (const arg of args) {
    const parsed = parse(arg)
    result.push(...parsed)
  }
  console.log(result.sort((a, b) => {
    if(a < b){
      return -1
    } else if(a > b){
      return 1
    } else return 0
  }).join('\n'))
}

solution(input);
