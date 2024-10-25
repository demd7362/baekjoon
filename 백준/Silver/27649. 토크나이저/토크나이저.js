const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
// .split("\n")
// .map(x => x.trim());

function solution(input) {
  const delimiters = new Set(['<', '>', '&&', '||', '(', ')'])
  let answer = ''
  let isStreak = false
  let wasDelimiter = false
  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    const nextChar = char + input[i+1]
    if(delimiters.has(nextChar)){
      if(wasDelimiter){
        answer += `${nextChar} `
      } else {
        answer += ` ${nextChar} `
      }
      i += 1
      wasDelimiter = true
      isStreak = false
      continue
    }
    if (char === ' ') {
      if (isStreak) {
        continue
      }
      if(wasDelimiter){
        isStreak = true
        continue
      }
      isStreak = true
      answer += ' '
      wasDelimiter = true
      continue
    }
    if (delimiters.has(char)) {
      if(wasDelimiter){
        answer += `${char} `
      } else {
        answer += ` ${char} `
      }
      wasDelimiter = true
    } else {
      answer += char
      wasDelimiter = false
    }
    isStreak = false

  }
  console.log(answer.trim())
}

solution(input)
