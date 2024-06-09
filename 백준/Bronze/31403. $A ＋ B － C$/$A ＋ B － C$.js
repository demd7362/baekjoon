const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution(args) {
    let [a,b,c] = args.map(Number);
    const concat = (a,b) => {
        return a.toString() + b.toString();
    }
    console.log(a + b - c);
    console.log(concat(a,b) - c);
}


solution(input);

