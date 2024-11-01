const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
// .split("\n")
// .map(x => x.trim())

function solution(input) {
  input = input.replace(/[\r\n\s]+/g, ' ').trim();
  const words = input.split(' ')
  let line = ''
  let lineLength = 0

  function printNewLine() {
    console.log(line)
    line = ''
    lineLength = 0
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    if (word === '<br>') {
      printNewLine()
      continue
    }

    if (word === '<hr>') {
      if (lineLength !== 0) {
        printNewLine()
      }
      console.log('-'.repeat(80))
      lineLength = 0
      continue
    }

    // 현재 줄 길이 + 공백(있는 경우) + 단어 길이가 80자 미만인지 체크
    if (lineLength + (lineLength > 0 ? 1 : 0) + word.length <= 80) {
      // 현재 줄이 비어있지 않으면 공백 추가
      if (lineLength > 0) {
        line += ' '
        lineLength++
      }
      line += word
      lineLength += word.length
    } else {
      printNewLine()
      line = word
      lineLength = word.length
    }
  }

  // 마지막 줄 출력
  if (lineLength > 0) {
    printNewLine()
  }
}

solution(input);
