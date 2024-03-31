const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function comparison(current, target){
    if(current === target){
        return true;
    }
    const converter = new Map();
    for (let i = 0; i < current.length; i++) {

        if(!converter.has(target[i])){ // 컨버터에 없다면 넣는다
            converter.set(target[i], current[i]);
        }
        const convertedTarget = converter.get(target[i]); // 컨버팅을 한다
        if(convertedTarget !== current[i]){ // 컨버팅을 한 결과물이 다르다면 return false
            return false;
        }
    }
    const currentSet = new Set([...current]);
    if(currentSet.size !== converter.size){
        return false;
    }
    return true;
}
function solution([n, ...args]) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        const current = args[i];
        for (let j = i + 1; j < n; j++) {
            const target = args[j];
            const isSimilar = comparison(current, target);
            if(isSimilar){
                count++;
            }
        }
    }
    console.log(count);
}


solution(input);
