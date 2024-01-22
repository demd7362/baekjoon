const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split('\n')
// .map(x => x.trim());

function solution(text) {
    let tagStart = false;
    let tagWords = [], words = [];
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '<') {
            tagWords[i] = char;
            tagStart = true;
            continue;
        }
        if (char === '>') {
            tagWords[i] = char;
            tagStart = false;
            continue;
        }
        if (tagStart) {
            tagWords[i] = char;
        } else {
            words[i] = char;
        }
    }

    const reverse = (arr) => {
        let word = '';
        for (let i = 0; i < arr.length; i++) {
            const char = arr[i];
            if (char && char !== ' ') {
                word += char;
            } else {
                for (let j = 0; j < word.length; j++) {
                    arr[i - j - 1] = word[j];
                }
                word = '';
            }
        }
        for (let j = 0; j < word.length; j++) {
            arr[arr.length - j - 1] = word[j];
        }
    }
    reverse(words);
    let answer = '';
    for(let i = 0; i<text.length; i++){
        answer += tagWords[i] || words[i];
    }
    console.log(answer);
}

solution(input);
