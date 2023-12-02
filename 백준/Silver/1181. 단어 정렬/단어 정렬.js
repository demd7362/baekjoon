const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())

function solution([first,...numbers]) {
    const answer = [...new Set(numbers)]
        .sort((a,b) => {
            if(a.length === b.length){
                return a.localeCompare(b);
            } else {
                return a.length - b.length;
            }
        }).join('\n');
    console.log(answer);
}
solution(input);