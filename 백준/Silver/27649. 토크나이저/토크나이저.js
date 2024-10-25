const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
// .split("\n")
// .map(x => x.trim());

function solution(input) {
  const operators = {
    singleChar: new Set(['<', '>', '(', ')']),
    doubleChar: new Set(['&&', '||'])
  }

  let result = ''
  let lastCharWasOperator = false
  let isRepeatedSpace = false

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i]
    const nextTwoChars = currentChar + input[i+1]

    // 두 글자 연산자 처리 (&&, ||)
    if (operators.doubleChar.has(nextTwoChars)) {
      result += lastCharWasOperator ? nextTwoChars : ` ${nextTwoChars}`
      result += ' '
      i++
      lastCharWasOperator = true
      isRepeatedSpace = false
      continue
    }

    if (currentChar === ' ') {
      if (!isRepeatedSpace && !lastCharWasOperator) {
        result += ' '
      }
      isRepeatedSpace = true
      lastCharWasOperator = true
      continue
    }

    if (operators.singleChar.has(currentChar)) {
      result += lastCharWasOperator ? currentChar : ` ${currentChar}`
      result += ' '
      lastCharWasOperator = true
    } else {
      result += currentChar
      lastCharWasOperator = false
    }
    isRepeatedSpace = false
  }

  console.log(result.trim())
}

solution(input)
