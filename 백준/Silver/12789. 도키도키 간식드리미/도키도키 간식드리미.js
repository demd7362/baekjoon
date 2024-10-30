const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, numbers]) {
  numbers = numbers.split(' ').map(Number).reverse()

  let count = 0
  const waitStack = []
  while(1){
    if(numbers.length === 0){
      if(waitStack.length === 0){
        console.log('Nice')
        return
      }
      const waitTop = waitStack.pop()
      if(waitStack.find(x => x < waitTop)){
        console.log('Sad')
        return
      }
      numbers.push(waitTop)
    }
    const numbersTop = numbers[numbers.length - 1]
    const waitTop = waitStack[waitStack.length - 1]
    if(numbersTop === count + 1){
      numbers.pop()
      count += 1
    } else if(waitTop === count + 1){
      waitStack.pop()
      count += 1
    } else {
      waitStack.push(numbersTop)
      numbers.pop()
    }
  }

}

solution(input);
