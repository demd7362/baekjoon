const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, ...args]) {


  // 자신보다 둘 다 높은 사람이 있다면 그사람은 탈락
  const solve = (args) => {
    args.sort((a, b) => a[0] - b[0])
    let count = 1
    let target = args[0][1] // 서류 1등 면접점수
    for (let i = 0; i < args.length - 1; i++) {
      if (target > args[i + 1][1]) { // 타겟보다 면접 점수가 높다면 합격
        target = args[i + 1][1] // 이 사람보다 면접 점수가 높다면 합격
        count += 1
      }
    }
    console.log(count)
  }


  for (let i = 0; i < args.length; i++) {
    let count = Number(args[i])
    const newArgs = []
    for (let j = i + 1; j < count + i + 1; j++) {
      const arg = args[j].split(' ').map(Number)
      newArgs.push(arg)
    }
    solve(newArgs)
    i += count
  }

}

solution(input)

