/*
How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element?

Almost Works??
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.nextMinLess = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
    this.minElement = null;
  }
  push(val) {
    let newNode = new Node(val)

    if (!this.minElement) {
      this.minElement = val
    } else if (val < this.minElement) {
      newNode.nextMinLess = this.minElement
      this.minElement = val
    } else {
      newNode.nextMinLess = this.minElement
    }

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    this.size++
  }
  pop() {
    if (!this.first) {
      return null
    } else {

      if (this.first.value === this.minElement) {
        this.minElement = temp.nextMinLess
      }
      
      let temp = this.first
      this.first = this.first.next
      this.size--


      return temp
    }
  }
  min() {
    return this.minElement
  }
}

const stack = new Stack()

stack.push(10)
stack.push(2)
stack.push(6)
stack.push(1)

stack.pop()

console.log()

console.log(stack)
console.log(stack.minElement)