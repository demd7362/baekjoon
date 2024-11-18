const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([t, ...args]) {
  const times = args.map(arg => {
    const [start, end] = arg.split(' ').map(Number)
    return {start, end}
  })
  times.sort((a, b) => {
    if(a.end === b.end){
      return a.start - b.start
    }
    return a.end - b.end
  })
  let lastEnd = times[0].end
  let result = 1
  for (let i = 1; i < times.length; i++) {
    const current = times[i]
    if (current.start >= lastEnd) {
      result ++
      lastEnd = current.end
    }
  }
  console.log(result)
}

solution(input)

