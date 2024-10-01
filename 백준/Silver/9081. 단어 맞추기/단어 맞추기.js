const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());

function solution([n, ...args]) {
    const toCodes = (str) => {
        return [...str].map(char => char.charCodeAt(0))
    }
    const toString = (codes) => {
        return [...codes].map(code => String.fromCharCode(code))
    }

    const test = (str) => {
        const codes = toCodes(str)
        const len = str.length
        for (let i = len - 1; i > 0; i--) {
            const prev = codes[i - 1]
            const current = codes[i]
            if (current > prev) { // L E H T T U
                let j = i
                let min = Infinity
                let minIndex = -1
                while (j < len) {
                    const target = codes[j]
                    if (prev < target && target < min) {
                        min = target
                        minIndex = j
                    }
                    j += 1
                }
                [codes[i - 1], codes[minIndex]] = [codes[minIndex], codes[i - 1]]
                console.log(toString(codes.slice(0, i)).join('') + toString(codes.slice(i).sort()).join(''))
                return
            }
        }
        console.log(str)
    }
    for (const arg of args) {
        test(arg)
    }
}

solution(input)
