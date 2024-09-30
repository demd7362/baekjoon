const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

function solution([n, ...args]) {
    const [target, ...rest] = args
    const getCounter = (word) => {
        const counter = [...word].reduce((acc, char) => {
            acc[char] = (acc[char] ?? 0) + 1
            return acc
        }, {})
        return counter
    }
    let answer = 0
    const check = (obj) => {
        let plus = 0
        let minus = 0
        for(const [k,v] of Object.entries(obj)){

            if(v === 1) {
                plus += 1
            } else if(v === -1){
                minus += 1
            } else if(v >= 2){
                return false
            } else if(v <= -2){
                return false
            }
        }
        return !(plus >= 2 || minus >= 2);

    }
    const test = (word) => {
        if (Math.abs(target.length - word.length) >= 2) {
            return
        }

        let counter = getCounter(word)
        for (let [k, v] of Object.entries(targetCounter)) {
            while (v > 0) {
                if (!counter[k]) {
                    counter[k] = 0
                }
                counter[k] -= 1
                v -= 1
            }
        }

        if(check(counter)){
            // console.log(word,counter)
            answer += 1
        }
    }
    const targetCounter = getCounter(target)

    for (const word of rest) {
        test(word)
    }
    console.log(answer)
}

solution(input)
