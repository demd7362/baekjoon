const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .split('\n')
    // .map(x => x.trim())

function solution(word) {
    const alphabets = ['c=','c-','dz=','d-','lj','nj','s=','z='];
    let count = 0;
    for(let i = 0; i<alphabets.length; i++){
        const alphabet = alphabets[i];
        const containsAlphabet = word.includes(alphabet);
        if(containsAlphabet){
            word = word.replace(alphabet,'$');
            count++;
            i--;
        }
    }
    word = word.replace(/[$]/g,'');
    count += word.length;
    console.log(count);
}

solution(input);
