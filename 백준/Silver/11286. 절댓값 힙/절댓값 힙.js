const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

class MinAbsHeap {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    push(value) {
        this.heap.push({
            value,
            abs: Math.abs(value)
        });
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
        return front.value;
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
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex].abs < this.heap[index].abs) {
                break;
            } else if(this.heap[parentIndex].abs === this.heap[index].abs){
                if(this.heap[parentIndex].value < this.heap[index].value){
                    break;
                }
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            if (this.heap[rightChildIndex]?.abs < this.heap[smallerChildIndex].abs) {
                smallerChildIndex = rightChildIndex;
            } else if(this.heap[rightChildIndex]?.abs === this.heap[smallerChildIndex].abs){
                if(this.heap[rightChildIndex]?.value < this.heap[smallerChildIndex].value){
                    smallerChildIndex = rightChildIndex;
                }
            }

            if (this.heap[index].abs < this.heap[smallerChildIndex].abs) {
                break;
            } else if(this.heap[index].abs === this.heap[smallerChildIndex].abs){
                if(this.heap[index].value < this.heap[smallerChildIndex].value){
                    break;
                }
            }
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}

function solution([n, ...args]) {
    const heap = new MinAbsHeap();
    const arr = [];
    for (const arg of args) {
        const number = Number(arg);
        if (number === 0) {
            arr.push(heap.poll());
        } else {
            heap.push(number);
        }
    }
    console.log(arr.join('\n'));
}


solution(input);
