const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([nm, args]) {
    let [n, m] = nm.split(' ').map(Number);
    let trees = args.split(' ').map(Number).sort((a, b) => a - b);

    // n 나무의 수 m 상근이가 가져가려고 하는 나무의 길이
    let start = 0;
    let end = trees[n - 1];

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let totalLength = trees.reduce((acc, tree) => {
            let length = tree - mid;
            if(length > 0){
                return acc + length;
            }
            return acc;
        }, 0);
        if (totalLength >= m) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log(end);

}

solution(input);
