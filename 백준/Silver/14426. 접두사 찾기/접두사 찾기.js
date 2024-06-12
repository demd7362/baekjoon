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

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isLeaf = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isLeaf;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}


function solution([nm, ...args]) {
    const [n, m] = nm.split(' ').map(Number);
    let words = args.slice(0, n);
    let prefixes = args.slice(n);
    let cnt = 0;
    let trie = new Trie();
    for(let word of words){
        trie.insert(word);
    }
    for(let prefix of prefixes){
        if(trie.startsWith(prefix)){
            cnt++;
        }
    }
    console.log(cnt);
}

solution(input);
