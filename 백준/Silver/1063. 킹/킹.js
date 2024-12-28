const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())


function solution([arg, ...args]) {
  let [king, stone, n] = arg.split(' ')
  n = +n
  let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  let mapToNumber = chars.reduce((acc, char, index) => {
    acc[char] = index
    return acc
  }, {})
  let movements = {
    B(current) {
      let [char, number] = current.split('')
      number = Math.max(1, (+number) - 1)
      return char + number
    },
    T(current) {
      let [char, number] = current.split('')
      number = Math.min(8, (+number) + 1)
      return char + number
    },
    L(current) {
      let [char, number] = current.split('')
      let index = Math.max(0, mapToNumber[char] - 1)
      char = chars[index]
      return char + number
    },
    R(current) {
      let [char, number] = current.split('')
      let index = Math.min(chars.length - 1, mapToNumber[char] + 1)
      char = chars[index]
      return char + number
    },
    RT(current) {
      let [char, number] = current.split('')
      let index = mapToNumber[char] + 1
      if (index >= chars.length) {
        return char + number
      }
      let newNumber = +number + 1
      if (newNumber > 8) {
        return char + number
      }
      let newChar = chars[index]
      return newChar + newNumber
    },
    LT(current) {
      let [char, number] = current.split('')
      let index = mapToNumber[char] - 1
      if (index < 0) {
        return char + number
      }
      let newNumber = +number + 1
      if (newNumber > 8) {
        return char + number
      }
      let newChar = chars[index]
      return newChar + newNumber
    },
    RB(current) {
      let [char, number] = current.split('')
      let index = mapToNumber[char] + 1
      if (index >= chars.length) {
        return char + number
      }
      let newNumber = +number - 1
      if (newNumber < 1) {
        return char + number
      }
      let newChar = chars[index]
      return newChar + newNumber
    },
    LB(current) {
      let [char, number] = current.split('')
      let index = mapToNumber[char] - 1
      if (index < 0) {
        return char + number
      }
      let newNumber = +number - 1
      if (newNumber < 1) {
        return char + number
      }
      let newChar = chars[index]
      return newChar + newNumber
    },
  }
  for (const arg of args) {
    let newKing = movements[arg](king)
    if(king === newKing){ // 경계를 벗어남(동일함)
      continue
    }
    if(newKing === stone){ // 돌이랑 킹이 마주쳤을 경우
      let newStone = movements[arg](stone) // 같은 움직임을 돌에 줌
      if(newStone === stone){ // 경계를 벗어남(동일함)
        continue
      }
      stone = newStone
    }
    king = newKing
  }
  console.log(king + '\n' + stone)

}

solution(input)
