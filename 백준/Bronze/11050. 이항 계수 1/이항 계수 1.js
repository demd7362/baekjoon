const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(args) {
    let [n, m] = args.split(' ').map(Number);
    const factorial = (n) => {
        let sum = 1;
        for (let i = 2; i <= n; i++) {
            sum *= i;
        }
        return sum;
    }
    console.log(factorial(n) / (factorial(m) * factorial(n - m)));
}


solution(input);
