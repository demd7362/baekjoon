const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())

function solution([people, arg]) {
    
    const minutes = arg.split(' ').map(Number).sort((a, b) => a - b);
    const getSum = (minutes) => {
        return minutes.reduce((acc,minute) => acc + minute, 0);
    }
    const arr = [];
    for(let i = 1; i<minutes.length + 1; i++){
        const sum = getSum(minutes.slice(0,i));
        arr.push(sum);
    }
    console.log(getSum(arr));
}

solution(input);
