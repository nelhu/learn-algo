const prettyFormat = require('pretty-format'); // CommonJS

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * 1. 单链表
 * 2. 方法：
 *  插入insert: 指定节点之后插入节点
 *  删除delete：删除指定节点之后的节点
 *  查找find：查找制指定节点
 *  getTail:
 *  getLength:
 *  findByValue
 *  findPrev
 */





class SingleLinkedList {
  constructor() {
    this.head = new Node('head');
  }
  getTail() {
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    return current;
  }
  append(newData) {
    const tail = this.getTail();
    tail.next = new Node(newData);
  }
  findByValue(value) {
    let current = this.head;
    while(current && current.data !== value) {
      current = current.next;
    }
    return current;
  }
  findPrev(value) {
    if (value) {
      let prev = this.head;
      while(prev && prev.next && prev.next.data !== value) {
        prev = prev.next;
      }
      return prev;
    }
  }
  insert(newData, value) {
    const point = this.findByValue(value)
    if (point) {
      const newNode = new Node(newData);
      newNode.next = point.next;
      point.next = newNode;
      return ;
    }
    throw new Error('未找到要插入的元素');
  }
  getLength() {
    let length = 0;
    let current = this.head;
    while(current) {
      length++;
      current = current.next;
    }
    return length - 1;
  }
  delete(value) {
    const deleted = this.findByValue(value);
    const prev = this.findPrev(value);
    if (deleted && prev) {
      prev.next = deleted.next;
      return ;
    }
    throw new Error('未找到要删除的元素');
  }
  // 链表翻转
  reverse() {
    let current = this.head.next;
    let previous = null;
    while(current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head.next = previous;
  }
  toString() {
    // console.dir(this.head);
    console.log(prettyFormat(this.head));
  }
}

const linkedList = new SingleLinkedList();

linkedList.append('1');
linkedList.append('2');
linkedList.append('3');
// linkedList.insert('x', '2')
linkedList.append('4');
// linkedList.insert('y', '3');
// linkedList.delete('x');
linkedList.reverse();
linkedList.toString();
