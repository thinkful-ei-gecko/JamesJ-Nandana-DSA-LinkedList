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
    while (tempNode.next !== null) {
      tempNode = tempNode.next
    }
    tempNode.next = new _Node(value, null)
  }

  remove(value) {
    let prevNode = null
    let currentNode = this.head
    while (currentNode.value !== value) {
      prevNode = currentNode
      currentNode = currentNode.next
      if (currentNode === null) {
        console.log('Item not found')
        return
      }
    }
    if (currentNode !== null) {
      prevNode.next = currentNode.next
    }
  }

  find(value) {
    let tempNode = this.head
    if (tempNode !== null) {
      while (tempNode.value !== value) {
        tempNode = tempNode.next
        if (tempNode === null) {
          return
        }
      }
      return tempNode
    } else {
      console.log('Value not found')
      return
    }
  }

  insertBefore(value, nodeValue) {
    let prevNode = null
    let currentNode = this.head

    while (currentNode.value !== nodeValue) {
      prevNode = currentNode
      currentNode = currentNode.next
    }
    if (currentNode !== null) {
      prevNode.next = new _Node(value, currentNode)
    }
  }

  insertAfter(value, nodeValue) {
    let currentNode = this.head
    let nextNode = currentNode.next

    while (currentNode.value !== nodeValue) {
      currentNode = nextNode
      nextNode = currentNode.next
    }
    currentNode.next = new _Node(value, nextNode)
  }
  insertAt(value, nodeIndex) {
    let prevNode = null
    let currentNode = this.head
    let counter = 0
    while (counter < nodeIndex) {
      prevNode = currentNode
      currentNode = currentNode.next
      counter++
    }
    if (currentNode !== null) {
      prevNode.next = new _Node(value, currentNode)
    }
  }
}

// free functions
// display linked list
function display(ll) {
  console.log(JSON.stringify(ll))
}

// return size of linked list
function size(ll) {
  let current = ll.head
  let next = current.next
  let count = 0
  while (next !== null && next.value !== null) {
    count++
    current = next
    next = next.next
  }
  console.log(count + 1)
}

// finds if the list is empty or not (without size())
function isEmpty(ll) {
  ll.head === null ? console.log('empty') : console.log('not empty')
}

// finds the node before the item you are looking for
function findPrevious(ll, value) {
  let prev = null
  let current = ll.head

  while (current.value !== value) {
    prev = current
    current = current.next
  }

  console.log(prev)
}

// returns the last node in the linked list
function findLast(ll) {
  let current = ll.head
  let next = current.next
  while (next !== null) {
    current = next
    next = next.next
  }
  console.log(current)
  return current
}
// end free functions

function main() {
  var SLL = new LinkedList()
  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')

  SLL.remove('squirrel')
  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat', 2)
  SLL.remove('Tauhida')
  // console.log(SLL.find('Tauhida'))

  // display(SLL)
  // size(SLL)
  // isEmpty(SLL)
  // isEmpty(new LinkedList())
  // findPrevious(SLL, 'Helo')
  // findLast(SLL)
}

main()

// Exercise 4
// Analyze the following function (without running it in an IDE)
// to determine what problem it is trying to solve.
// What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
  let current = lst.head // Node 1
  while (current !== null) {
    let newNode = current
    while (newNode.next !== null) {
      console.log(newNode)
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next
      } else {
        newNode = newNode.next
      }
    }
    current = current.next
  }
}

WhatDoesThisProgramDo(SLL)
// ANSWER: For as long as we do not reach the end of the list
// compare the first Node value against the next and if equal,
// skip to the next next node and compare, else update to next node
// and compare. Upon reaching the end of the list, start from current's
// next and do it again. Not really doing anything...?

