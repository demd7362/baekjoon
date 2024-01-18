const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());

function solution([NL, leaks]) {
    leaks = leaks.split(' ').map(Number);
    let [n, tapeLength] = NL.split(' ').map(Number);
    leaks.sort((a, b) => a - b); // 1 2 3
    let cnt = 0;
    let coverLength = 0;
    for(let leak of leaks){
        if(leak > coverLength){
            cnt++;
            coverLength = leak + tapeLength - 0.5;
        }
    }
    console.log(cnt)
}

solution(input);
