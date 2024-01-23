const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
.split('\n')
.map(x => x.trim());

function solution([n,...args]) {
    const getSum = (str) => {
        let result = 0;
        for(let i = 0; i<str.length; i++){
            const value = Number(str[i]);
            if(!isNaN(value)){
                result += value;
            }
        }
        return result;
    }
    args.sort((a,b) => {
        const aLength = a.length, bLength = b.length;
        if(aLength !== bLength){
            return aLength - bLength;
        }
        const aSum = getSum(a), bSum = getSum(b);
        if(aSum !== bSum){
            return aSum - bSum;
        }
        return a.localeCompare(b);
    })

    console.log(args.join('\n'))
}



solution(input);
