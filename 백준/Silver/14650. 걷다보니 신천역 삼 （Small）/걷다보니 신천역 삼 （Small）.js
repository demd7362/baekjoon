const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(n) {
    n = Number(n);
    let cnt = 0;
    const dfs = (depth, current) => {
        if(current.startsWith('0')){
            return;
        }
        if (depth === n) {
            if(Number(current) % 3 === 0){
                cnt++;
            }
            return;
        }
        for (let i = 0; i < 3; i++) {
            dfs(depth + 1, current + String(i));
        }
    }
    dfs(0,'');
    console.log(cnt)
}

solution(input);
