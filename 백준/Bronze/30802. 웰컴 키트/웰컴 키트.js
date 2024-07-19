const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, requests, tp]) {
    requests = requests.split(' ').map(Number);
    const [t, p] = tp.split(' ');
    let tCount = 0;
    for (let request of requests) {
        tCount += Math.ceil(request / t);
    }
    console.log(tCount);
    console.log(Math.floor(n / p), n % p);


}

solution(input);
