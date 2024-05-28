const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

function solution([nc, arg]) {
    let [n, c] = nc.split(' ').map(Number);
    const numbers = arg.split(' ').map(Number);
    let priority = 10000000;
    const counter = numbers.reduce((acc, number) => {
        if(!acc[number]){
            acc[number] = {
                priority: priority--,
                count: 0
            }
            return acc;
        }
        acc[number].count++;
        return acc;
    }, {});
    numbers.sort((a, b) => {
        if (counter[b].count === counter[a].count) {
            return counter[b].priority - counter[a].priority;
        }
        return counter[b].count - counter[a].count;
    });
    console.log(numbers.join(' '));
}


solution(input);
