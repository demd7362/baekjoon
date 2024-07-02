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
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(value) {
        let node = new Node(value);

        if (this.rear === null) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let temp = this.front;
        this.front = this.front.next;

        if (this.front === null) {
            this.rear = null;
        }
        this.length--;
        return temp.value;
    }

    isEmpty() {
        return this.front === null;
    }

    size() {
        return this.length;
    }

    sum() {
        let node = this.front; 
        let sum = 0;
        while (node) {
            sum += node.value.weight;
            node = node.next; 
        }
        return sum;
    }

    increasePosition() {
        let node = this.front; 
        while (node) {
            node.value.position++;
            node = node.next; 
        }
    }

    peek() {
        return this.front.value;
    }
}

function solution([nwl, args]) {
    let [n, bridgeLength, maxWeight] = nwl.split(' ').map(Number);
    let trucks = args.split(' ').map((arg) => ({
        weight: Number(arg),
        position: 0
    }));
    let queue = new Queue();
    let front = 0;
    let count = 0;

    while (front < n || !queue.isEmpty()) {
        count++;

        if (!queue.isEmpty() && queue.peek().position === bridgeLength) {
            queue.dequeue();
        }

        if (front < n) {
            const sum = queue.sum();
            let tryWeight = trucks[front].weight + sum;
            if (tryWeight <= maxWeight) {
                trucks[front].position = 0;
                queue.enqueue(trucks[front]);
                front++;
            }
        }

        queue.increasePosition();
    }

    console.log(count);
}

solution(input);
