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

function solution([n, ...numbers]) {
    [numbers] = numbers;
    const answer = numbers.split('').map(Number).reduce((acc,val) => acc +val,0);
    console.log(answer)


}


solution(input); // 2 2 1 3 1 1
