const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

function solution([n, args]) {
    function isPrimeNumber(n) {
        if (n === 1) return false;
        for (let i = 2; i < n; i++)
            if (n % i === 0) {
                return false;
            }
        return true;
    }

    let count = 0;
    args.split(' ').map(Number).forEach(arg => {
        if (isPrimeNumber(arg)) {
            count++;
        }
    })
    console.log(count);
}


solution(input);
