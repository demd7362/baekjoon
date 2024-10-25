const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
// .split("\n")
// .map(x => x.trim());

function solution(input) {
  const tokens = [];
  const operators = ['<', '>', '&&', '||', '(', ')'];
  let i = 0;

  while (i < input.length) {
    while (input[i] === ' ') i++;

    if (i >= input.length) break;

    const twoChars = input.slice(i, i + 2);
    if (['&&', '||'].includes(twoChars)) {
      tokens.push(twoChars);
      i += 2;
      continue;
    }

    if (['<', '>', '(', ')'].includes(input[i])) {
      tokens.push(input[i]);
      i++;
      continue;
    }

    let word = '';
    while (i < input.length &&
    !operators.includes(input[i]) &&
    !operators.includes(input.slice(i, i + 2)) &&
    input[i] !== ' ') {
      word += input[i];
      i++;
    }
    if (word) tokens.push(word);
  }

  console.log(tokens.join(' '));
}

solution(input)
