const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());

function solution([nm, ...args]) {
    const [n, m] = nm.split(' ').map(Number)
    let words = args.filter(arg => arg.length >= m)
    const counter = words.reduce((acc, arg) => {
        acc[arg] = (acc[arg] ?? 0) + 1
        return acc
    }, {})
    words = [...new Set(words)]
    words.sort((a,b) => {
        if(counter[a] !== counter[b]){
            return counter[b] - counter[a]
        }
        if(a.length !== b.length){
            return b.length - a.length
        }
        return a.localeCompare(b)
    })
    console.log(words.join('\n'))


}

solution(input)
