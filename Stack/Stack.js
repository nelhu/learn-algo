const prettyFormat = require('pretty-format');

/**
 * 基于数组的顺序栈
 */
class ArrayBasedStack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item)
  }
  pop() {
    return this.items.pop();
  }
  print() {
    console.log(prettyFormat(this.items));
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * 基于链表的链式栈
 */
class LinkedListBasedStack {
  constructor() {
    this.top = null;
  }
  push(item) {
    const node = new Node(item);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }
  pop() {
    if (this.top === null) return false;
    const value = this.top.data;
    this.top = this.top.next;
    return value;
  }
  print() {
    console.log(prettyFormat(this.top));
  }
}


const s1 = new ArrayBasedStack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.pop();
s1.pop();
s1.print();

const s2 = new LinkedListBasedStack();
s2.push(1);
s2.push(2);
s2.push(3);
s2.pop();
s2.pop();
s2.pop();
s2.print();

