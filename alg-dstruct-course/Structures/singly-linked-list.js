class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  // Find the second-last node, sever its connection, update tail and length
  pop() {
    if (!this.length) { return 'no elements' }
    if (this.length == 1) {
      let removedNode = this.head
      this.head = null
      this.tail = null
      this.length = 0
      return removedNode
    }

    let current = this.head
    let newTail = this.head

    while (current) {
      current = current.next

      if (!current.next) {
        let removedNode = current
        newTail.next = null
        this.tail = newTail
        this.length--

        if (this.length === 0) {
          this.head = null
          this.tail = null
        }
        return removedNode
      }
      newTail = current
    }
  }
  shift() {
    if (!list.length) { return 'No elements'}
    
    if (this.length == 1) {
      let oldhead = this.head
      this.head = null
      this.tail = null
      this.length = 0
      return oldhead
    } else {
      let oldhead = this.head
      this.head = this.head.next
      this.length--
      return oldhead
    }
  }
  unshift(val) {
    let newNode = new Node(val)
    
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  traverse() {
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
}


let list = new SinglyLinkedList()
list.push('HELLO')
list.push('GOODBYE')
list.push('!')

list.shift()
list.shift()

list.unshift('AHHH')

list.traverse()
console.log(list)
