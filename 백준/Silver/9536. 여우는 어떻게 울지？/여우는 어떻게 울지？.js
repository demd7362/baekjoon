const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());

function solution([t, ...args]) {
    const solve = (args) => {
        const [sounds,...says] = args
        let arr = sounds.split(' ')
        for(const say of says){
            const [animal, _ , sound] = say.split(' ')
            arr = arr.filter(x => x !== sound)
        }
        console.log(arr.join(' '))

    }
    let i = 0
    let newArgs = []
    while(t > 0){
        const arg = args[i++]
        if(arg === 'what does the fox say?') {
            solve(newArgs)
            t -= 1
            newArgs = []
        } else {
            newArgs.push(arg)
        }
    }


}

solution(input)
