const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())
    .map(Number);

function solution([n, ...args]) {
    const fibonacci = (n) => {
        if (n === 0) {
            return [0];
        }
        if (n === 1) {
            return [0,1];
        }
        const result = [0, 1, 1];
        for (let i = 3; i <= n; i++) {
            const val = result[i - 2] + result[i - 1];
            result.push(val);
        }
        return result;
    }

    args.forEach(arg => {
        const result = fibonacci(arg);
        console.log(result[arg-1] ?? 1,result[arg]);
    });
}

solution(input);