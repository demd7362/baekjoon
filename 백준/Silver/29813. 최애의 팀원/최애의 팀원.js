const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

class Queue {

  constructor() {
    this.inStack = []
    this.outStack = []
  }

  enqueue(value) {
    this.inStack.push(value)
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop())
      }
    }
    return this.outStack.pop()
  }

  isEmpty(){
    return this.outStack.length === 0 && this.inStack.length === 0
  }
}

function solution([n, ...args]) {
  n = +n
  const students = args.map(arg => {
    const [initial, studentNo] = arg.split(' ')
    return {initial, studentNo: +studentNo}
  })
  const q = new Queue()
  for(const student of students){
    q.enqueue(student)
  }
  while(!q.isEmpty()){
    let {initial, studentNo} = q.dequeue()
    for(let i = 0; i < studentNo - 1; i++){
      q.enqueue(q.dequeue())
    }
    let target = q.dequeue()
    if(target === undefined){
      console.log(initial)
      break
    }
  }

}

solution(input)
