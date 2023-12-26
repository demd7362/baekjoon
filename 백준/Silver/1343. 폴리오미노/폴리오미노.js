const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split('\n')
// .map(x => x.trim());

const POLYOMINO_A = "AAAA";
const POLYOMINO_B = "BB";

function solution(param) {
    param += '.';
    let word = '';
    let answer = '';
    for (const char of param) {
        if (char === '.') {
            while (word.length > 0) {
                if (word.length >= 4) {
                    word = word.slice(4);
                    answer += POLYOMINO_A;
                } else if (word.length >= 2) {
                    word = word.slice(2);
                    answer += POLYOMINO_B;
                } else {
                    console.log(-1);
                    return;
                }
            }
            answer += char;
        } else {
            word += char;
        }
    }
    console.log(answer.slice(0, answer.length - 1));

}

solution(input);
