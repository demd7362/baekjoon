const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .toNumber();
// .split("\n")
// .map(x => x.trim())
// .map(Number);
/*
1
2
6
24
120
720
5040
40320
362880

 */
function factorial(n) {
    let result = BigInt(1);
    for (let i = 1; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}



function solution(n) {
    const numbers = factorial(n)
        .toString()
        .split('')
        .map(Number)
        .reverse();
    console.log(numbers.findIndex(number => number !== 0));
}

solution(input);


