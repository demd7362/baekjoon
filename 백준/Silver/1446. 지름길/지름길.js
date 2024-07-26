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
    peek(){
        if (this.isEmpty()) {
            return 0;
        }
        const front = this.heap[0];
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

function solution([nd, ...args]) {
    // n 지름길의 갯수, d 고속도로의 길이
    const [n, d] = nd.split(' ').map(Number);
    const shortcuts = args.map(arg => arg.split(' ').map(Number));
    const distances = new Array(d + 1).fill(Infinity);
    const graph = Array.from({length: d + 1}, () => []);
    for (let i = 0; i <= d; i++) {
        graph[i].push([i + 1, 1]);
    }
    for (const [start, end, weight] of shortcuts) {
        if(start < d){
            graph[start].push([end, weight]);
        }
    }
    const pq = new MinHeap();
    // 시작 거리 0, 지나온 거리 0
    pq.push([0, 0]);
    while(!pq.isEmpty()){
        const [current, currentWeight] = pq.poll();
        // 현재 위치가 누적합보다 작아야만함
        if(currentWeight > distances[current]){
            continue;
        }
        const joinNodes = graph[current];
        for(const [joinNode, weight] of joinNodes){
            const newWeight = currentWeight + weight;
            if(newWeight < distances[joinNode]){
                pq.push([joinNode, newWeight]);
                distances[joinNode] = newWeight;
            }
        }
    }
    console.log(distances[d]);

}

solution(input);
