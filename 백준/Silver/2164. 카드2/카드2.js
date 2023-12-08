const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .toNumber()
    // .split("\n")
    // .map(x => x.trim())

// .map(Number);

function solution(n){
    let magicNumber = 1;
    while(n >= magicNumber){
        magicNumber <<= 1;
    }
    magicNumber >>= 1;
    if(n % magicNumber === 0){
        console.log(n);
    } else
    console.log(n % magicNumber << 1)
}
solution(input)
