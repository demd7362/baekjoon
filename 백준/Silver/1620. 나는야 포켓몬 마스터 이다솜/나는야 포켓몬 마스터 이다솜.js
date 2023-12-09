const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());


function solution([lengths, ...args]) {
    const isNumber = (arg) => {
        return !isNaN(Number(arg));
    }
    const [len1, len2] = lengths.split(' ').map(Number);
    const pokemonMap = args.slice(0,len1).reduce((acc,pokemon,idx)=>{
        acc[pokemon] = idx + 1;
        return acc;
    },{})
    const answer = [];
    for(let i = 0; i<len2; i++){
        const value = args[i + len1];
        if(!isNumber(value)){
            answer.push(pokemonMap[value]);
        } else {
            answer.push(args[value - 1]);
        }
    }
    console.log(answer.join('\n'));
}

solution(input);
