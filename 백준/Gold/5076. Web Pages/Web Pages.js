const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution(input) {
  const solve = (html) => {
    let stack = [], tagName = ''
    for (let i = 0; i < html.length; i++) {
      const char = html[i]
      if (char === '<') {
        tagName = '<'
        continue
      }
      if (char === '>') {
        tagName += '>'
        if (tagName === '<br />') { // br은 패스
          tagName = ''
          continue
        }
        if (tagName.includes('</')) { // 닫는 태그임
          if (tagName.includes("=")) { // 속성값이 들어갔음
            return 'illegal'
          }
          const tagTop = stack.pop()
          tagName = tagName.replace('/','')
          if (tagTop !== tagName) {
            return 'illegal'
          }
        } else {
          if(tagName.includes('=')){
            const split = tagName.split(' ')
            stack.push(split[0] + '>')
          } else {
            stack.push(tagName)
          }
        }
        tagName = ''
        continue
      }
      if (tagName) {
        tagName += char
      }
    }
    if(stack.length){
      return 'illegal'
    }
    return 'legal'
  }
  const results = []
  for (let i = 0; i < input.length - 1; i++) {
    let line = input[i]
    const result = solve(line)
    results.push(result)
  }
  console.log(results.join('\n'))
}

solution(input);
