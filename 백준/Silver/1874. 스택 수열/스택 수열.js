const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())
    .map(Number);

class Stack {
    constructor(arr = []) {
        this.arr = arr;
        this.operator = '';
        this.max = 1;
    }
    push(value){
        this.max++;
        this.operator += '+';
        return this.arr.push(value);
    }
    pop(){
        this.operator += '-';
        return this.arr.pop();
    }
    size(){
        return this.arr.length;
    }
    isEmpty(){
        return this.size() === 0;
    }
    peek(){
        if(this.size() === 0) return 0;
        return this.arr[this.arr.length - 1];
    }
}

function solution([n,...numbers]){
    const stack = new Stack();
    for(const number of numbers){
        while(stack.max <= number){
            stack.push(stack.max);
        }
        if(stack.peek() === number){
            stack.pop();
        } else {
            console.log('NO');
            return;
        }

    }
    console.log(stack.operator.split('').join('\n'));
}

solution(input);
