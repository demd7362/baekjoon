const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())
    .map(Number);

function solution([count,...args]) {

    for (const arg of args) {
        if (arg < 2) {
            console.log(1);
            continue; // 다음 arg로 넘어갑니다.
        }
        if (arg === 2) {
            console.log(2);
            continue; // 다음 arg로 넘어갑니다.
        }

        const dp = [1, 1, 2]; // n=0, n=1, n=2일 때의 초기값 설정
        for (let i = 3; i <= arg; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        }
        console.log(dp[arg]); // arg에 해당하는 값을 출력
    }
}

solution(input);