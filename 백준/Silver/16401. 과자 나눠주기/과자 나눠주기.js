const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([mn, args]) {
    let [m, n] = mn.split(' ').map(Number);
    let snacks = args.split(' ').map(Number).sort((a, b) => a - b);

    // m 조카 수 n 과자의 수
    let start = 0;
    let end = snacks[n - 1];

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        // 나눌 수 있는 크기로 최대한 나눴을때의 총 과자 카운트
        let count = snacks.reduce((acc, snack) => acc + Math.floor(snack / mid), 0);
        if (count >= m) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log(end);

}

solution(input);
