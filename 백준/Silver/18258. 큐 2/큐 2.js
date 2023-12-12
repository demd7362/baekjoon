const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(x => x.trim());

class Queue {
    constructor(arr = []) {
        this.arr = arr;
        this.$front = 0;
        this.$rear = 0;
    }

    size() {
        return this.$rear - this.$front;
    }

    empty() {
        return this.size() === 0 ? 1 : 0;
    }

    pop() {
        if (this.empty() === 1) {
            return -1;
        }
        return this.arr[this.$front++];
    }

    front() {
        if (this.empty() === 1) {
            return -1;
        }
        return this.arr[this.$front];
    }

    back() {
        if (this.empty() === 1) {
            return -1;
        }
        return this.arr[this.$rear - 1];
    }

    push(value) {
        this.arr[this.$rear++] = value;
    }
}

function solution([N, ...rest]) {
    const arr = [];
    const queue = new Queue();
    for (const args of rest) {
        let [command, param] = args.split(' ');
        const result = queue[command](param);
        if (result !== undefined) {
            arr.push(result);
        }
    }
    console.log(arr.join('\n'))


}

solution(input);
