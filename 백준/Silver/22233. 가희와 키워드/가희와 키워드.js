const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());

function solution([nm, ...args]) {
    const [n, m] = nm.split(' ').map(Number)
    const set = new Set()
    for (let i = 0; i < n; i++) {
        set.add(args[i])
    }
    const answers = []
    for (let i = n; i < n + m; i++) {
        const keywords = args[i].split(',')
        const distinctKeywords = new Set(keywords)
        for (const keyword of distinctKeywords) {
            set.delete(keyword)
        }
        answers.push(set.size)
    }
    console.log(answers.join('\n'))
}

solution(input)
