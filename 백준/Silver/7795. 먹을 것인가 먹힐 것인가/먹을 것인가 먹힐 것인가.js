const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, ...args]) {
    let i = 0;
    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return arr.length - left;
    }

    while (n > 0) {
        let currents = args[i + 1].split(' ').map(Number).sort((a, b) => a - b);
        let targets = args[i + 2].split(' ').map(Number).sort((a, b) => a - b);
        let cnt = 0;
        targets.forEach(target => {
            let result = binarySearch(currents, target);
            cnt += result;
        })
        console.log(cnt)
        n -= 1;
        i += 3;
    }
}


solution(input);

