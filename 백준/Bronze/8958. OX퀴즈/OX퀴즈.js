const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n,...args]) {
    const getScore = (n) => {
        let sum = 0;
        for(let i = 1; i<=n; i++){
            sum += i;
        }
        return sum;
    }
    for(const arg of args){
        let score = 0;
        let answer = 0;
        for(const OX of arg){
            if(OX === 'O'){
                score ++;
            } else {
                answer += getScore(score);
                score = 0;
            }
        }
        answer += getScore(score);
        console.log(answer)
    }
}

solution(input);
