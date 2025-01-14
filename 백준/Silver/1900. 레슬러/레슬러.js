const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())


function solution([n, ...args]) {
  n = +n
  let canWin = (a, b) => {
    return a.power + (b.power * a.ring) > b.power + (a.power * b.ring)
  }
  let info = args.map(arg => {
    let [power, ring] = arg.split(' ').map(Number)
    return {power, ring}
  })
  let golds = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let iWin = canWin(info[i], info[j])
      if (iWin) {
        golds[i]++
      } else {
        golds[j]++
      }
    }
  }
  golds = golds.map((arg, i) => ({
    index: i + 1,
    gold: arg
  }))
  golds = golds.sort((a, b) => b.gold - a.gold).map(arg => arg.index)
  console.log(golds.join('\n'))
}

solution(input)
