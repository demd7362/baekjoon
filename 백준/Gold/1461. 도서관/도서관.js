const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

function solution([nm, books]) {
  let [n, m] = nm.split(" ").map(Number)
  books = books.split(' ').map(Number)

  let positive = []
  let negative = []
  let max = 0
  for (let book of books) {
    max = Math.max(Math.abs(book), max)
    if (book > 0) {
      positive.push(book)
    } else {
      negative.push(Math.abs(book))
    }
  }
  positive.sort((a, b) => b - a)
  negative.sort((a, b) => b - a)
  let result = 0
  for (let i = 0; i < positive.length; i += m) {
    result += positive[i] * 2
  }
  for (let i = 0; i < negative.length; i += m) {
    result += negative[i] * 2
  }
  console.log(result - max)
}

solution(input)
