const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n,... args]) {
    n = Number(n);
    // 1 1 1 2 2 3 4 5 7 9 12;
    const numbers = args.map(Number);
    for(const number of numbers){
        const dp = [1,1,1];
        for(let i = 3; i < number; i++){
            dp[i] = dp[i - 3] + dp[i-2];
        }
        console.log(dp[number - 1]);
    }
}

solution(input);
