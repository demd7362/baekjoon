const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());

function solution([n, ...args]) {
    const asc = args[0].split(' ').map(Number).sort((a,b) => a - b);
    const desc = args[1].split(' ').map(Number).sort((a,b) => b - a);
    const sum = asc.reduce((acc,val,idx) => {
       return acc + val * desc[idx];
    },0);
    console.log(sum);
}

solution(input);
