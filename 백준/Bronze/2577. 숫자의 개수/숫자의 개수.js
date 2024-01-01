const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution(args){
    const value = args.reduce((acc,val) => {
        val = Number(val);
        return acc * val;
    })
    const map = {};
    for(const number of value.toString()){
        map[number] = (map[number] ?? 0) + 1;
    }
    const ans = [];
    for(let i = 0; i<=9; i++){
        ans.push(map[i] ?? 0);
    }
    console.log(ans.join('\n'));
}
solution(input);
