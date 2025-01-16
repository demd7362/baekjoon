const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([nm, ...args]) {
  let [n, m] = nm.split(' ').map(Number)
  let result = ''
  let diff = 0
  for (let i = 0; i < m; i++) {

    let counter = {}
    for (let j = 0; j < n; j++) {
      let char = args[j][i]
      counter[char] = (counter[char] ?? 0) + 1
    }
    let max = Math.max(...Object.values(counter))
    let [maxes, othersSum] = Object.entries(counter).reduce((acc, [k, v]) => {
      if (v === max) {
        acc[0].push(k)
      } else {
        acc[1] += v
      }
      return acc
    }, [[], 0]) // max
    if (maxes.length > 1) {
      maxes.sort()
      othersSum += maxes.slice(1).reduce((acc, key) => acc + counter[key], 0)
    }
    result += maxes[0]
    diff += othersSum
  }
  console.log(result)
  console.log(diff)

}

solution(input)
