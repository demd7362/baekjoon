const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())

function solution(n,scores){
    scores = scores.split(' ').map(Number);
    const max = Math.max(...scores);
    const getAvg = (...scores) => {
        return scores.reduce((acc,score) => acc + score, 0) / n;
    }
    const avg = getAvg(...scores);
    console.log(avg / max * 100);
}
const [n,scores] = input;
solution(n,scores);