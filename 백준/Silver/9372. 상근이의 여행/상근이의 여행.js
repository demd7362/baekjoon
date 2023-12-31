const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n, ...args]) {
    n = Number(n);
    
    for (let i = 0; i < args.length;) {
        const [N, M] = args[i].split(' ').map(Number);
        console.log(N-1);
        i += M + 1;
    }
}

solution(input);
