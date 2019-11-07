class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}
// 1. Create a linked list class
// Walk through the linked list code in the curriculum and understand it well. 
// Then write a linked list class and its core functions 
// (insertFirst, insertLast, remove, find) from scratch.

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(value) {
    this.head = new _Node(value, this.head)
  }

  insertLast(value) {
    let tempNode = this.head
    while(tempNode.next !== null) {
      tempNode = tempNode.next
    }
    tempNode.next = new _Node(value, null)
  }

  remove(value) {
    let prevNode = null
    let currentNode = this.head
    while(currentNode.value !== value) {
      prevNode = currentNode
      currentNode = currentNode.next
    }
    prevNode.next = currentNode.next
  }

  find(value) {
    let tempNode = this.head
    while (tempNode.value !== value) {
      tempNode = tempNode.next
    }
    return tempNode
  }
}

function main() {
  let testLL = new LinkedList
  testLL.insertFirst('foo')
  testLL.insertLast('bar')
  testLL.insertLast('remove')
}

main()