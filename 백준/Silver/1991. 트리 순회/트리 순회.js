const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor() {
        this.nodes = {};
    }

    addNode(data, left, right) {
        if (!this.nodes[data]) {
            this.nodes[data] = new Node(data);
        } 
        if (left !== '.') {
            this.nodes[left] = new Node(left);
            this.nodes[data].left = this.nodes[left];
        }
        if (right !== '.') {
            this.nodes[right] = new Node(right);
            this.nodes[data].right = this.nodes[right];
        }
    }

    preorder(node, result = []) {
        if (node !== null) {
            result.push(node.data);
            this.preorder(node.left, result);
            this.preorder(node.right, result);
        }
        return result;
    }

    inorder(node, result = []) {
        if (node !== null) {
            this.inorder(node.left, result);
            result.push(node.data);
            this.inorder(node.right, result);
        }
        return result;
    }

    postorder(node, result = []) {
        if (node !== null) {
            this.postorder(node.left, result);
            this.postorder(node.right, result);
            result.push(node.data);
        }
        return result;
    }
}

function solution([n, ...args]) {
    const tree = new BinaryTree();
    for (const arg of args) {
        const [data, left, right] = arg.split(' ');
        tree.addNode(data, left, right);
    }
    console.log(tree.preorder(tree.nodes['A']).join(''));
    console.log(tree.inorder(tree.nodes['A']).join(''));
    console.log(tree.postorder(tree.nodes['A']).join(''));
}

solution(input);
