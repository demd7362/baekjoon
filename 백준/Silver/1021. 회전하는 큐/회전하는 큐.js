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
    toArray(){
        if(!this._front){
            return [];
        }
        let arr = [];
        let node = this._front;
        while(node){
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }

    unshift(value) {
        let node = new Node(value);
        if (this._front) {
            // 기존에 가장 앞에 있던노드
            let frontNode = this._front;
            frontNode.prev = node;
            node.next = frontNode;
            this._front = node;
        } else {
            this._front = node;
            this._rear = node;
        }
        this.length++;
    }

    push(value) {
        let node = new Node(value);
        if (this._rear) {
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

    shift() {
        if (this.length === 0) {
            return null;
        }
        let currentNode = this._front;
        let value = currentNode.value;
        if (this.length === 1) {
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

    pop() {
        if (this.length === 0) {
            return null;
        }
        let currentNode = this._rear;
        let value = currentNode.value;
        if (this.length === 1) {
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
    peekFront(){
        if(this._front){
            return this._front.value;
        }
        return null;
    }
    peekRear(){
        if(this._rear){
            return this._rear.value;
        }
        return null;
    }

    size() {
        return this.length;
    }

    empty() {
        return this.length > 0;
    }
    indexOf(value){
        let index = 0;
        let node = this._front;
        while(node.value !== value){
            node = node.next;
            index++;
        }
        return index;
    }
}

function solution([nm, args]) {
    let deque = new Deque();
    let [n, m] = nm.split(' ').map(Number);
    for (let i = 1; i <= n; i++) {
        deque.push(i);
    }
    let count = 0;
    let numbers = args.split(' ').map(Number);
    for (let number of numbers) {
        while(true){
            let half = Math.floor(deque.size() / 2);
            let targetIndex = deque.indexOf(number);
            if(half < targetIndex){
                let value = deque.pop();
                deque.unshift(value);
            } else {
                let value = deque.shift();
                if(value === number){
                    break;
                }
                deque.push(value);
            }
            let curr = deque.peekFront();
            if(curr === number){
                deque.shift();
                count++;
                break;
            }
            count++;
        }


    }
    console.log(count)

}


solution(input);

