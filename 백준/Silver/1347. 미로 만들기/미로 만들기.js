const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, arg]) {
  let [x, y] = [0, 0]
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]] // 북 동 남 서
  let current = 1 // 남이면 2가 맞는데 왜 1일때 정답이?
  let visited = new Set(['0/0'])
  for (let move of arg) {
    if (move === 'F') {
      let [dx, dy] = directions[current]
      x += dx
      y += dy
      visited.add(`${x}/${y}`)
    } else if (move === 'L') {
      current = (current - 1 + 4) % 4
    } else if (move === 'R') {
      current = (current + 1) % 4
    }
  }
  let [xDirs, yDirs] = [...visited].reduce((acc, xy) => {
    let [x, y] = xy.split('/').map(Number)
    acc[0].push(x)
    acc[1].push(y)
    return acc
  }, [[], []])
  let minX = Math.min(...xDirs)
  let maxX = Math.max(...xDirs)
  let minY = Math.min(...yDirs)
  let maxY = Math.max(...yDirs)
  let map = []
  for (let i = minX; i <= maxX; i++) {
    let row = []
    for (let j = minY; j <= maxY; j++) {
      if (visited.has(`${i}/${j}`)) {
        row.push('.')
      } else {
        row.push('#')
      }
    }
    map.push(row.join(''))
  }
  console.log(map.join('\n'))

}

solution(input)
