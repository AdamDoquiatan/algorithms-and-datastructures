/*
How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element?
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    let newNode = new Node(val)
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
      let temp = this.first
      this.first = this.first.next
      this.size--
      return temp
    }
  }
}

const list = new Stack()

list.push('HELLO')
list.push('GOODBYE')
list.push('!')
list.push('OH No')

list.pop()

console.log(list)