const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim());

function solution(arg) {
    const mod = arg.length % 4
    if (mod !== 0 || !arg.startsWith('w')) {
        return 0
    }
    let words = ['']
    let counter = {
        'w': 0,
        'o': 0,
        'l': 0,
        'f': 0
    }
    loop:
        for (const char of arg) {
            counter[char] += 1
            for (let i = 0; i < words.length; i++) {
                const word = words[i]

                switch (char) {
                    case 'w': {
                        if(counter.o > 0 || counter.l > 0){
                            return 0
                        }
                        if (word === '') {
                            words[i] += 'w'
                        } else {
                            words.push('w')
                        }
                        continue loop
                    }
                    case 'o': {
                        if(counter.w < 1 || counter.l > 1){
                            return 0
                        }
                        if (word === 'w') {
                            words[i] += 'o'
                            continue loop
                        }
                        break
                    }
                    case 'l': {
                        if(counter.w !== counter.o){
                            return 0
                        }
                        if (word === 'wo') {
                            words[i] += 'l'
                            continue loop
                        }
                        break
                    }
                    case 'f': {
                        if(counter.l !== counter.o){
                            return 0
                        }
                        if (word === 'wol') {
                            words[i] = ''
                            for(const key in counter){
                                counter[key] -= 1
                            }
                            continue loop
                        }
                        break
                    }
                }
            }
        }
    const hasNotEmpty = words.some(word => word)
    // console.log(arg, words)
    if (hasNotEmpty) {
        return 0
    }
    return 1

}
const result = solution(input)
console.log(result)