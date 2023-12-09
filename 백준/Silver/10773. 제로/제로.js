const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);


function solution([n,...numbers]){
    const stack = [];
    for(const number of numbers){
        if(number === 0){
            stack.pop();
        } else {
            stack.push(number);
        }
    }
    const sum = stack.reduce((acc,number) => acc + number,0);
    console.log(sum);
}
solution(input);
