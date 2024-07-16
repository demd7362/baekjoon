const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([rg]) {
    const [r, g] = rg.split(' ').map(Number);

    function getGcd(a, b) {
        if (b === 0) {
            return a;
        }
        return getGcd(b, a % b);
    }

    function getDivisors(n){
        const arr = [];
        for(let i = 1; i <= n; i++){
            if(n % i === 0){
                arr.push(i);
            }
        }
        return arr;
    }
    let gcd = getGcd(r,g);
    const divisors = getDivisors(gcd);
    for(let divisor of divisors){
        console.log(divisor,r / divisor, g/divisor);
    }

}

solution(input);
