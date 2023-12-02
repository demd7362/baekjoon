const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())

function solution([first, ...words]) {
    const isGroupWord = (word) => {
        let prevChar = word[0];
        const charSet = new Set([word[0]]);
        for (let i = 1; i < word.length; i++) {
            const char = word[i];
            if (charSet.has(char)) {
                if (prevChar !== char) {
                    return 0;
                }
            } else {
                charSet.add(char);
            }
            prevChar = char;
        }
        return 1;
    }
    let cnt = 0;
    for (const word of words) {
        cnt += isGroupWord(word);
    }
    console.log(cnt)
}

solution(input)
