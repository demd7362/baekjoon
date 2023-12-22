const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());


function solution([n, ...rest]) {
    const map = new Map();
    const len = rest[0].length;
    let cnt = 1;
    loop:
        for (let i = 1; i <= len; i++) {
            for (const number of rest) {
                const slice = number.slice(len - i, len);
                if (map.has(slice)) {
                    cnt++;
                    continue loop;
                }
                map.set(slice,true);
            }
            break;
        }
    console.log(cnt)
}

solution(input);
