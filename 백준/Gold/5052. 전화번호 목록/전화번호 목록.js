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


    startsWith(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
            if(node.isLeaf){
                return true;
            }
        }
        return false;
    }

}

function solution([n, ...args]) {
    let index = 0;
    let arr = [];
    while (index < args.length) {
        let params = Number(args[index++]);
        let phoneNumbers = args.slice(index, index + params);
        phoneNumbers.sort();

        let isConsistent = true;

        for (let i = 0; i < phoneNumbers.length - 1; i++) {
            if (phoneNumbers[i + 1].startsWith(phoneNumbers[i])) {
                isConsistent = false;
                break;
            }
        }

        if (isConsistent) {
            arr.push('YES');
        } else {
            arr.push('NO');
        }
        index += params;
    }
    console.log(arr.join('\n'));

}

solution(input);
