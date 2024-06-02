const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

function solution(args) {
    for (let i = 0 ; i<args.length-1; i++) {
        const numbers = args[i].split(' ').map(Number).sort((a, b) => a - b);
        if(numbers[0] ** 2 + numbers[1] ** 2 === numbers[2] ** 2){
            console.log('right');
        } else {
            console.log('wrong');
        }
    }

}


solution(input);
