const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

class TrieNode {
    constructor() {
        this.children = {};
        this.isLeaf = false;
    }
}

class Tree {
    constructor() {
        this.root = new TrieNode();
    }

    add(dir) {
        let folders = dir.split('\\');
        let node = this.root;
        for (let folder of folders){
            if(!node.children[folder]){
                node.children[folder] = new TrieNode();
            }
            node = node.children[folder];
        }
        node.isLeaf = true;
    }
    print(node = this.root, depth = 0){
        if(Object.keys(node.children).length === 0){
            return;
        }
        let sortedKey = Object.keys(node.children).sort();
        for (let key of sortedKey) {
            console.log(`${' '.repeat(depth)}${key}`);
            this.print(node.children[key], depth + 1);
        }
    }


}

function solution([n, ...args]) {
    let tree = new Tree();
    for (let dir of args) {
        tree.add(dir);
    }
    tree.print();


}

solution(input);
