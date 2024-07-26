const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

class MinHeap {
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
            if (this.heap[parentIndex][1] <= this.heap[index][1]) {
                break;
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
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][1] < this.heap[smallerChildIndex][1]) {
                smallerChildIndex = rightChildIndex;
            }
            if (this.heap[index][1] <= this.heap[smallerChildIndex][1]) {
                break;
            }
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}

function solution([n, m, ...args]) {
    n = Number(n); // 도시
    m = Number(m); // 버스
    const newArgs = args.slice(0, args.length - 1).map(arg => arg.split(' ').map(Number));
    const [start, end] = args[args.length - 1].split(' ').map(Number);
    const pq = new MinHeap();
    const graph = newArgs.reduce((acc, [s, e, w]) => {
        if (!acc[s]) {
            acc[s] = [];
        }
        acc[s].push([e, w]);
        return acc;
    }, {});
    const dp = Array.from({length: n + 1}, () => Infinity);
    dp[start] = 0;
    pq.push([start, 0])
    while (!pq.isEmpty()) {
        const [currentNode, currentWeight] = pq.poll();
        if (currentWeight > dp[currentNode]) {
            continue;
        }
        if(currentNode === end){
            console.log(currentWeight);
            return;
        }
        const joinNodes = graph[currentNode];
        if (!joinNodes) {
            continue;
        }
        for (const [joinNode, weight] of joinNodes) {
            const newWeight = currentWeight + weight;
            if (newWeight < dp[joinNode]) {
                pq.push([joinNode, newWeight]);
                dp[joinNode] = newWeight;
            }
        }
    }

}

solution(input);
