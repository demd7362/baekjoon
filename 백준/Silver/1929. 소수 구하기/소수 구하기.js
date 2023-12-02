const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(x => x.trim())
    .map(Number);

function solution([start,end]) {
    const isPrimeNumber = (n) => {
        if(n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    const arr = [];
    for(let i = start; i <= end; i++){
        if(isPrimeNumber(i)){
            arr.push(i);
        }
    }
    console.log(arr.join('\n'))
}
solution(input)