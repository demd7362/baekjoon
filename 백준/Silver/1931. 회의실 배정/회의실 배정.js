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
  times.sort((a, b) => a.end - b.end || a.start - b.start)
  let lastEnd = times[0].end
  const results = [times[0]]
  for (let i = 1; i < times.length; i++) {
    const current = times[i]
    if (current.start >= lastEnd) {
      results.push(current)
      lastEnd = current.end
    }
  }
  console.log(results.length)
}

solution(input)

