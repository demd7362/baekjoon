const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())

function solution([n,...books]){
    let map = {};
    for(const book of books){
        map[book] = (map[book] ?? 0) + 1;
    }
    map = Object.fromEntries(Object.entries(map).sort(([aKey,aValue],[bKey,bValue]) => {
        if(aValue === bValue){
            return aKey.localeCompare(bKey);
        } else {
            return bValue - aValue;
        }
    }))
    console.log(Object.keys(map)[0]);
}

solution(input);
