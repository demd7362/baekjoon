const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())
    .map(Number);

function solution([count,...args]) {

    for(const arg of args){
        const dp = [1,1,2];
        for(let i = 3; i <= arg; i++){
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        }
        console.log(dp[arg]);
    }
}

solution(input);