const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .toNumber()
    .split("\n")
    .map(x => x.trim())
    // .map(Number);

function solution(word){
    if(word === '0') return;
    const reverse = word.split('').reverse().join('');

    console.log(word === reverse ? 'yes':'no');
}

input.forEach(solution)
