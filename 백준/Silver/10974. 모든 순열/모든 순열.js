const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .split(' ')
    // .map(x => x.trim())
    // .map(Number);

function solution(input) {
    const arr = [];
    for(let i = 1; i<=input; i++){
        arr.push(i);
    }
    const permutation = (arr) => {
        if(arr.length === 0) return [[]];
        const results = [];
        const [first,...rest] = arr;
        const perms = permutation(rest);
        for(const perm of perms){
            for(let i = 0; i<perm.length + 1; i++){
                const result = [...perm.slice(0,i),first,...perm.slice(i)];
                results.push(result);
            }
        }
        return results;
    }
    const perms = permutation(arr).map(perm => perm.join(' ')).sort((a,b) => {
        if(a < b){
            return -1;
        } else if(a > b){
            return 1;
        } else return 0;
    });
    perms.forEach(perm => console.log(perm));
}

solution(input);