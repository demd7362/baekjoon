const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())


function solution([n, ...args]) {
  n = +n
  let compare = (a, b) => {
    return (a.power + (b.power * a.ring)) - (b.power + (a.power * b.ring))
  }
  let players = args.map((arg, i) => {
    let [power, ring] = arg.split(' ').map(Number)
    return {power, ring, index: i + 1}
  }).sort((a, b) => compare(b, a))
    .map(arg => arg.index)
  console.log(players.join('\n'))
}

solution(input)
