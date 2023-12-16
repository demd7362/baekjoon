const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

class Stack {
    constructor(arr = []) {
        this.arr = arr;
    }

    peek() {
        return this.arr[this.arr.length - 1];
    }

    pop() {
        return this.arr.pop();
    }

    push(val) {
        this.arr.push(val);
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    size() {
        return this.arr.length;
    }
}

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())

function isPrimeNumber(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(numbers) {

    for (let i = 0; i < numbers.length - 1; i++) {
        let count = 0;
        const number = Number(numbers[i]);
        if(number ===13) debugger
        for (let j = number+1; j <= number * 2; j++) {
            if(isPrimeNumber(j)){
                count++;
            }
        }
        console.log(count)
    }
}

solution(input);


