const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(args) {
    let [n, m] = args.split(' ').map(Number);
    const circle = Array.from({ length: n }, (_, i) => i + 1);
    const result = [];
    let index = 0;

    while (circle.length > 0) {
        index = (index + m - 1) % circle.length;
        result.push(circle[index]);
        circle.splice(index, 1);
    }
    console.log(`<${result.join(', ')}>`);
}


solution(input);
