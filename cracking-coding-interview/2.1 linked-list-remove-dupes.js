/*
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0;
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

  removeDups(node) {
    // Don't need to set node to this.node becase js tracks state of arg node until func ends
    let previousNode = null;
    const inList = {}

    while (node != null) {
      if (inList.hasOwnProperty(node.val)) {
        previousNode.next = node.next
        this.length--
      } else {
        inList[node.val] = true
        previousNode = node
      }
      node = node.next
    }

  }

}

let list = new List()
list.push('HELLO')
list.push('HELLO')
list.push('HELLO')
list.push('GOODBYE')
list.push('HELLO')



list.removeDups(list.head)

console.log(list.head.val)
console.log(list.head.next.val)

console.log(list)



