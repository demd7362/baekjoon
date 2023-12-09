const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());

class Queue {
    constructor(arr = []) {
        this.arr = arr;
    }

    push(el) {
        this.arr.push(el);
    }

    pop() {
        return this.arr.shift() ?? -1;
    }

    size() {
        return this.arr.length;
    }

    empty() {
        return this.size() === 0 ? 1 : 0;
    }

    front() {
        return this.arr[0] ?? -1;
    }

    back() {
        return this.arr[this.size() - 1] ?? -1;
    }


}

function solution([n, ...args]) {
    const queue = new Queue();
    const answer = [];
    for(const arg of args){
        const [command,param] = arg.split(' ');
        const result = queue[command](param);
        if(result !== undefined){
            answer.push(result);
        }
    }
    console.log(answer.join('\n'))
}

solution(input);
