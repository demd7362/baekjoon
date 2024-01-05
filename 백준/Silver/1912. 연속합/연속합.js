const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n, arg]) {
    n = Number(n);
    const arr = arg.split(' ').map(Number);
    let dp = new Array(n);
    dp[0] = arr[0];

    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
    }

    console.log(Math.max(...dp));
}

solution(input);
