const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n,...args]){
    for(const arg of args){
        let [repeatCount, word] = arg.split(' ');
        let newWord = '';
        for(const char of word){
            newWord += char.repeat(repeatCount);
        }
        console.log(newWord)
    }
}
solution(input);
