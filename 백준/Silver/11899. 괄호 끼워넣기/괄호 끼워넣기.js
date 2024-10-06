const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .split("\n")
    // .map(x => x.trim());

function solution(word) {
    const peek = () => {
        return stack[stack.length - 1]
    }
    const stack = []
    for(const char of word){
        if(char === '('){
            stack.push('(')
        } else {
            if(peek() === '('){
                stack.pop()
            } else {
                stack.push(')')
            }
        }
    }
    console.log(stack.length)
}

solution(input)
