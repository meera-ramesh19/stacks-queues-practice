const { nums, words } = require('./data/data.js');
const { inspect } = require('util');

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    const newItem = new Node(data);
    if (this.top === null) {
      this.top = newItem;
    } else {
      newItem.next = this.top;
      this.top = newItem;
    }
  }

  pop() {
    if (this.top == null) {
      throw new Error('The stack is empty');
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  size() {
    let count = 0;
    let node = this.top;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  isEmpty() {
    if (this.top == null) return true;
    return false;
  }

  peek() {
    if (this.length === 0) throw new Error('The stack is empty');
    return this.top;
  }

  findMin() {
    let min = this.top.data;
    let node = this.top.next;
    while (node) {
      if (min > node.data) {
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }

   sort(){
    let temp=new Stack()
    while(this.top){
        let item=this.pop().data
        while (temp.top && temp.top.data < item){
           this.push(temp.pop().data)
        }
        temp.push(item)
     }
     this.top=temp.top
    }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }
  dequeue() {
    if (this.first == null) {
      throw new Error('The queue is empty');
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }

  count() {
    let counter = 0;
    let node = this.first;
    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }

  peek() {
    if (this.first == null) {
      throw new Error('The queue is empty');
    }
    return this.first;
  }

  getLast() {
    if (!this.first) throw new Error('no nodes here');
    let node = this.first;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  findMax() {
    if (this.max) return this.max;
    let max = this.first.data;
    let node = this.first.next;
    while (node) {
      if (max < node.data) {
        max = node.data;
      }
      node = node.next;
    }
    this.max;
    return max;
  }

  isEmpty() {
    return this.first === null;
  }


}
module.exports = {
  Node,
  Queue,
  Stack,
};
