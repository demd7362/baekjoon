const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());

function solution([rc, ...args]) {
    const [r, c] = rc.split(' ').map(Number)
    const findRowDirection = () => {
        const words = []
            for (let i = 0; i < r; i++) {
                let word = ''
                for (let j = 0; j < c; j++) {
                    const char = args[i][j]
                    if (char === '#') {
                        if(word.length >= 2){
                            words.push(word)
                        }
                        word = ''
                        continue
                    }
                    word += char
                }
                if(word.length >= 2){
                    words.push(word)
                }

            }
        return words
    }
    const findColDirection = () => {
        const words = []
        for (let i = 0; i < c; i++) {
            let word = ''
            for (let j = 0; j < r; j++) {
                const char = args[j][i]
                if(char === '#'){
                    if(word.length >= 2){
                        words.push(word)
                    }
                    word = ''
                    continue
                }
                word += char
            }
            if(word.length >= 2){
                words.push(word)
            }
        }
        return words
    }
    const rowWords = findRowDirection()
    const colWords = findColDirection()
    const words = [...new Set([...rowWords, ...colWords])].sort()
    console.log(words[0])
}

solution(input)
