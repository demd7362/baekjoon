const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    poll() {
        if (this.isEmpty()) {
            return 0;
        }
        const front = this.heap[0];
        const rear = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = rear;
            this.bubbleDown();
        }
        return front;
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let biggerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            if (this.heap[rightChildIndex] > this.heap[biggerChildIndex]) {
                biggerChildIndex = rightChildIndex;
            }
            
            if (this.heap[index] >= this.heap[biggerChildIndex]) {
                break;
            }
            this.swap(index, biggerChildIndex);
            index = biggerChildIndex;
        }
    }
}

function solution([n, ...args]) {
    const maxHeap = new MaxHeap();
    const arr = [];
    for (const arg of args) {
        const number = Number(arg);
        if (number === 0) {
            arr.push(maxHeap.poll());
        } else {
            maxHeap.push(number);
        }
    }
    console.log(arr.join('\n'))
}


solution(input);










