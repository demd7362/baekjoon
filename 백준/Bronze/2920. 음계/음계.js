const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .split('\n')
    // .map(x => x.trim());


function solution(arg){
    if(arg === '1 2 3 4 5 6 7 8'){
        console.log('ascending');
    } else if(arg === '8 7 6 5 4 3 2 1'){
        console.log('descending');
    } else {
        console.log('mixed');
    }
}
solution(input);
