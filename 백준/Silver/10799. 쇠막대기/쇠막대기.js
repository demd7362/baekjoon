const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .split('\n')
    // .map(x => x.trim());


function solution(arg) {
    let stack = [];
    let pieces = 0;

    for (let i = 0; i < arg.length; i++) {
        if (arg[i] === '(') {
            stack.push('(');
        } else {
            stack.pop();
            if (arg[i - 1] === '(') {
                pieces += stack.length;
            } else {
                pieces += 1;
            }
        }
    }

    console.log(pieces);
}


solution(input);
