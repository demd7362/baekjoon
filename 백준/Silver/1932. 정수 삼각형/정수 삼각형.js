const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, ...args]) {
    let dp = args.map(arg => arg.split(' ').map(Number));
    let origin = args.map(arg => arg.split(' ').map(Number));
    for (let i = 0; i < dp.length - 1; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            dp[i + 1][j] = Math.max(dp[i][j] + origin[i + 1][j], dp[i + 1][j]);
            dp[i + 1][j + 1] = Math.max(dp[i][j] + origin[i + 1][j + 1], dp[i + 1][j + 1]);

        }

    }
    // dp.forEach((x, i) => console.log(' '.repeat(n - i), ...x))
    console.log(Math.max(...dp[n - 1]));
}


solution(input);

