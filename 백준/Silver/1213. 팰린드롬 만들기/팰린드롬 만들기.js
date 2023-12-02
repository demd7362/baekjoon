const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim();

function solution(word){
    const counter = [...word].reduce((acc,char) => {
        acc[char] = (acc[char] ?? 0) + 1;
        return acc;
    },{});

    let oddCount = 0;
    let oddChar = '';
    let halfStr = '';
    for(const char of Object.keys(counter)){
        const value = counter[char];
        if(value % 2 === 1){ // 홀수라면
            oddCount++;
            oddChar = char;
        }
        if (oddCount > 1) {
            console.log("I'm Sorry Hansoo");
            return;
        }
        halfStr += char.repeat(Math.floor(value / 2));
    }
    let sortedHalf = halfStr.split('').sort().join('');
    let reverseHalf = sortedHalf.split('').reverse().join('');
    console.log(sortedHalf + (oddCount ? oddChar : '') + reverseHalf);
}
solution(input);