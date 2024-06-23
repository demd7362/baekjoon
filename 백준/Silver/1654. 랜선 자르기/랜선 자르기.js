const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([kn, ...args]) {
    let [k, n] = kn.split(' ').map(Number); // k 랜선의 갯수 n 필요한 랜선의 갯수
    let wires = args.map(Number).sort((a, b) => a - b);
    let start = 0;
    let end = Math.max(...wires);

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let count = wires.reduce((acc, wire) => {
            return acc + Math.floor(wire / mid);
        }, 0);

        if (count >= n) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log(end);

}

solution(input);
