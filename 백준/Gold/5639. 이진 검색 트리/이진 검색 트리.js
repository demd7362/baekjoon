const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 이진 검색 트리의 전위 순회 결과는 50 30 24 5 28 45 98 52 60 이고,
// 후위 순회 결과는 5 28 24 45 30 60 52 98 50 이다.
class BinarySearchTree {
  constructor() {
    this.size = 0
    this.root = null
  }
  insert(insertNode){
    if(this.size++ === 0){
      this.root = new Node(insertNode)
    } else {
      this._insertion(new Node(insertNode), this.root)
    }
  }
  preOrderPrint(){
    let result = []
    let dfs = (node) => {
      if(node.left){
        result.push(node.left.value)
        dfs(node.left)
      }
      if(node.right){
        result.push(node.right.value)
        dfs(node.right)
      }
    }
    if(this.root !== null){
      result.push(this.root.value)
    }
    if(this.root !== null){
      dfs(this.root)
    }
    console.log(result)
  }
  postOrderPrint(){
    let result = []
    let dfs = (node) => {
      if(node.left){
        dfs(node.left)
        result.push(node.left.value)
      }
      if(node.right){
        dfs(node.right)
        result.push(node.right.value)
      }
    }
    if(this.root !== null){
      dfs(this.root)
      result.push(this.root.value)
    }
    
    console.log(result.join('\n'))
  }
  _insertion(insertNode, targetNode){
    if(insertNode.value < targetNode.value){
      if(targetNode.left){
        this._insertion(insertNode, targetNode.left)
      } else {
        targetNode.left = insertNode
      }
    } else {
      if(targetNode.right){
        this._insertion(insertNode, targetNode.right)
      } else {
        targetNode.right = insertNode
      }
    }
  }
}

function solution(args) {
  let numbers = args.map(Number)
  let bst = new BinarySearchTree()
  for(let number of numbers){
    bst.insert(number)
  }
  bst.postOrderPrint()

}

solution(input)
