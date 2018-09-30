class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }
  insert(value) {
    let newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let searching = true
    let currentNode = this.root
    while(searching) {
      if(newNode.value === currentNode.value) {
        return "duplicate node: " + newNode.value
      }
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
        currentNode.left = newNode
        return this
        } else {
          currentNode = currentNode.left
        }

      } else if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
        currentNode.right = newNode
        return this
        } else {
          currentNode = currentNode.right
        }
      }
    }

  }
  find(value) {
    if(!this.root) {
      return "no root"
    }

    let currentNode = this.root
    let searching = true
    while(searching) {
      if (currentNode === null) {
        return "value not found"
      } else if (value === currentNode.value) {
        return "" + currentNode.value + " found"
      } else if(value < currentNode.value) {
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        currentNode = currentNode.right
      } 
    }


  }
}

let tree = new BinarySearchTree()

tree.insert(5)
tree.insert(1)
tree.insert(9)
tree.insert(15)
tree.insert(2)
tree.insert(11)
tree.insert(8)

console.log(tree.find(10))