const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());

function solution([n, ...args]) {
    args.sort((a,b) => {
        const [aName,...aScores] = a.split(' ');
        const [aKor,aEng,aMath] = aScores.map(Number);
        const [bName,...bScores] = b.split(' ');
        const [bKor,bEng,bMath] = bScores.map(Number);
        if(aKor !== bKor){
            return bKor - aKor;
        }
        if(aEng !== bEng){
            return aEng - bEng;
        }
        if(aMath !== bMath){
            return bMath - aMath;
        }
        const nameLength = Math.max(aName.length,bName.length);
        for(let i = 0; i<nameLength; i++){
            if(aName.charCodeAt(i) !== bName.charCodeAt(i)){
                return aName.charCodeAt(i) - bName.charCodeAt(i);
            }
        }
    })
    const answer = args.map(arg => {
        return arg.split(' ')[0];
    });
    console.log(answer.join('\n'))



}

solution(input);
