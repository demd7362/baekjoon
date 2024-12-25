const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, arg]) {
  n = +n
  arg = [...arg]
  function isValid(str) {
    let balance = 0;
    for (const char of str) {
      if (char === '(') balance++;
      else if (char === ')') balance--;
      if (balance < 0) return false;
    }
    return balance === 0;
  }
  let dfs = (index, current) => {
    if(index === n){
      if(isValid(current)){
        console.log(current)
        process.exit()
      }
      return
    }
    if (arg[index] !== 'G') {
      dfs(index + 1, current + arg[index])
    } else {
      dfs(index + 1, current + '(')
      dfs(index + 1, current + ')')
    }
  }

  dfs(0, '')

}

solution(input)
