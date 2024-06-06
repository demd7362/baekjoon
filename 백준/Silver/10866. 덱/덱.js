const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class Deque {

    constructor() {
        this._front = null;
        this._rear = null;
        this.length = 0;
    }

    push_front(value){
        let node = new Node(value);
        if(this._front){
            // 기존에 가장 앞에 있던노드
            let frontNode = this._front;
            frontNode.prev = node;
            node.next = frontNode;
            this._front = node;
        } else {
            this._front = node;
            this._rear = node; //이건왜?
        }
        this.length++;
    }
    push_back(value){
        let node = new Node(value);
        if(this._rear){
            let rearNode = this._rear;
            node.prev = rearNode;
            rearNode.next = node;
            this._rear = node;
        } else {
            this._front = node;
            this._rear = node;
        }
        this.length++;
    }
    pop_front(){
        if(this.length === 0){
            return -1;
        }
        let currentNode = this._front;
        let value = currentNode.value;
        if(this.length === 1){
            this._front = null;
            this._rear = null;
            this.length = 0;
            return value;
        }
        this._front = currentNode.next;
        this._front.prev = null;
        this.length--;
        return value;
    }
    pop_back(){
        if(this.length === 0) {
            return -1;
        }
        let currentNode = this._rear;
        let value = currentNode.value;
        if(this.length === 1){
            this._front = null;
            this._rear = null;
            this.length = 0;
            return value;
        }
        this._rear = currentNode.prev;
        this._rear.next = null;
        this.length--;
        return value;
    }
    size(){
        return this.length;
    }
    empty(){
        return this.length ? 0 : 1;
    }
    front(){
        if(this._front){
            return this._front.value;
        }
        return -1;
    }
    back(){
        if(this._rear){
            return this._rear.value;
        }
        return -1;
    }
}
function solution([nm, ...args]) {
    let deque = new Deque();
    let answer = [];
    for(let arg of args){
        let [func, param] = arg.split(' ');
        let result = param ? deque[func](param) : deque[func]();
        if(result !== undefined){
            answer.push(result);
        }
    }
    console.log(answer.join('\n'));

}


solution(input);

