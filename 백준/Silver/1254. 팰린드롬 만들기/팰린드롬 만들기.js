const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(str) {
    let reverse = [...str].reverse().join('');

    if (reverse === str) {
        console.log(reverse.length);
        return;
    }

    for (let i = 1; i < str.length; i++) {
        let part = str.slice(i);
        const reversePart = [...part].reverse().join('');
        if (part === reversePart) {
            console.log(part.length + (i * 2))
            break;
        }
    }


}

solution(input);
