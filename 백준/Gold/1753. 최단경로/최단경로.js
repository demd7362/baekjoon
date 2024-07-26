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

    peek() {
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

function solution([ve, start, ...args]) {
    // v 정점의 갯수 e 간선의 갯수
    const [v, e] = ve.split(' ').map(Number);
    start = Number(start);
    args = args.map(arg => arg.split(' ').map(Number));

    const graph = args.reduce((acc, [start, end, weight]) => {
        if (!acc[start]) {
            acc[start] = [];
        }
        acc[start].push([end, weight]);
        // if (!acc[end]) {
        //     acc[end] = [];
        // }
        // acc[end].push([start, weight]);
        return acc;
    }, {})
    const dp = new Array(v + 1).fill(Infinity);
    dp[start] = 0;
    function dijkstra() {
        const pq = new MinHeap();
        pq.push([start, 0]);
        while(!pq.isEmpty()){
            const [current, currentWeight] = pq.poll();
            if(currentWeight > dp[current]){
                continue;
            }
            const joinNodes = graph[current];
            if(joinNodes === undefined){
                continue;
            }
            for(const [joinNode, weight] of joinNodes){
                const newWeight = currentWeight + weight;
                if(newWeight < dp[joinNode]){
                    pq.push([joinNode, newWeight]);
                    dp[joinNode] = newWeight;
                }
            }
        }
    }
    dijkstra();
    for (let i = 1; i <= v; i++) {
        if(i === start){
            console.log(0);
            continue;
        }
        let result = dp[i];
        if(result === Infinity){
            result = 'INF';
        }
        console.log(result);
    }


}

solution(input);
