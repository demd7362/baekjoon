const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())
class Stack {
    constructor(arr = []) {
        this.arr = arr;
    }
    push(arg){
        this.arr.push(arg);
    }
    pop(){
        return this.arr.pop() ?? -1;
    }
    size(){
        return this.arr.length;
    }
    empty(){
        return this.arr.length > 0 ? 0 : 1;
    }
    top(){
        if(this.empty() === 1){
            return -1;
        }
        return this.arr[this.arr.length - 1];
    }
}
function solution([first,...args]) {
    const stack = new Stack();
    const answer = args.reduce((acc,arg) => {
        const [command,param] = arg.split(' ');
        const printElement = stack[command](param);
        if(printElement !== undefined){
            acc.push(printElement);
        }
        return acc;
    },[])
    console.log(answer.join('\n'));
}
solution(input);