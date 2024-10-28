const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim());

function solution([n, ...args]) {
  args = args.map(arg => arg.split(' ').map(Number)).sort((a, b) => a[0] - b[0])
  const findMaxHeight = () => {
    let maxHeight = 0
    let maxHeightIndex = 0
    for (let i = 0; i < args.length; i++) {
      const [width, height] = args[i]
      if (maxHeight <= height) {
        maxHeight = height
        maxHeightIndex = i
      }
    }
    return [maxHeight, maxHeightIndex]
  }

  const [maxHeight, maxHeightIndex] = findMaxHeight()
  let answer = 0
  const calculateFromLeft = () => {
    let maxHeight = -1001
    let sum = 0
    for (let i = 0; i <= maxHeightIndex; i++) {
      let [currWidth, currHeight] = args[i]
      maxHeight = Math.max(maxHeight, currHeight)
      if (i < maxHeightIndex) { // 앞 인덱스의 값은 width 값 계산에 사용
        let widthDiff = args[i + 1][0] - currWidth
        sum += widthDiff * maxHeight
      }

    }
    return sum
  }
  const calculateFromRight = () => {
    let maxHeight = -1001
    let sum = 0
    for (let i = n - 1; i > maxHeightIndex; i--) {
      let [currWidth, currHeight] = args[i]
      maxHeight = Math.max(maxHeight, currHeight)
      let widthDiff = currWidth - args[i - 1][0]
      sum += widthDiff * maxHeight
    }
    return sum
  }
  answer += calculateFromLeft()
  answer += calculateFromRight()
  answer += maxHeight
  console.log(answer)
}

solution(input);
