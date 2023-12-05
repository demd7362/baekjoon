const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .toNumber()
// .split("\n")
// .map(x => x.trim())
// .map(Number);

function solution(input) {
    const [num1, num2] = input.split(' ').map(Number);
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);
    let val = 1;
    for (let i = 1; i<=max; i++) {
        if(min % i === 0 && max % i === 0){
            val = Math.max(val,i);
        }
    }
    console.log(val);
    for (let i = min; true; i += min) {
        if(i % max === 0){
            console.log(i);
            break;
        }
    }

}

solution(input)
