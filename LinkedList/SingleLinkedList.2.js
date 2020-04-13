const prettyFormat = require('pretty-format'); // CommonJS

/**
 * 单链表
 *
 * @reward 写完买零食
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  isEmpty() {
    return this.head.next === null;
  }

  // 根据索引查找
  findByIndex(index) {
    const current = this.head.next;
    let pos = 0;
    while (current && pos <= index) {
      current = current.next;
      pos++;
    }
    if (!current) {
      throw new Error('index out of boundary');
    }
    return current;
  }

  // 根据值查找
  findPointByValue(value) {
    let current = this.head;
    while (current && current.data !== value) {
      current = current.next;

    }
    if (!current) throw new Error(`can't find node for ${value}`);
    return current;
  }

  // 根据值查找前一个节点
  findPrevByValue(value) {
    let current = this.head;
    let prev = null;
    while (current.data !== value) {
      prev = current;
      current = current.next;
    }
    return prev;
  }

  // 查找链尾
  findTail() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  // 在某节点之后插入
  insert(value, newValue) {
    const point = this.findPointByValue(value);
    const newNode = new Node(newValue);
    newNode.next = point.next;
    point.next = newNode;
  }

  // 删除某个节点
  delete(value) {
    const point = this.findPrevByValue(value);
    point.next = point.next.next;
  }

  // 链尾掺入
  append(value) {
    const tail = this.findTail();
    tail.next = new Node(value);
  }

  // 成环
  makeCircular() {
    const tail = this.findTail();
    tail.next = this.head;
  }

  // 输出
  print() {
    console.log(prettyFormat(this.head));
  }

  // 常用的链表操作

  /**
   * 链表翻转
   */
  reverse() {
    let prev = null;
    let current = this.head.next;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head.next = prev;
  }



  /**
   * 链表中环的检测
   * 快慢指针法
   */
  detectCircular() {
    let slow = this.head.next;
    let fast = this.head.next.next;
    while (slow !== null && fast !== null) {
      if (slow === fast) return true;
      slow = slow.next;
      fast = fast.next && fast.next.next;
    }
    return false;
  }




  /**
   * 删除链表倒数第n个节点
   */
 deleteByIndexFromEnd(index) {
    this.reverse();
    let current = this.head.next;
    let prev = null;
    let pos = 0;
    while (pos < index) {
      prev = current;
      current = current.next;
      pos++
    }
    prev.next = prev.next.next;
    this.reverse();
  }

  /**
   * 求链表中间节点
   */
  middleNode() {
    let slow = this.head.next;
    let fast = this.head.next.next;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next && fast.next.next;
    }
    return slow;
  }
}

// 两个有序链表合并
const merge = (list1, list2) => {
  let a = list1.head.next;
  let b = list2.head.next;

  let head = null;
  if (a.data < b.data) {
    head = a;
    a = head.next;
  } else {
    head = b;
    b = head.next;
  }

  let current = head;

  while (a !== null && b !== null) {
    if (a.data < b.data) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }
    current = current.next;
  }
  a === null ? current.next = b : current.next = a;
  return head;
}

const l1 = new LinkedList();

l1.append('1');
l1.append('2');
l1.append('3');
l1.append('4');
l1.append('5');
l1.append('6');
l1.append('7');
console.log(l1.middleNode());

// l1.deleteByIndexFromEnd(2);
// l1.insert('2', 'x');
// l1.insert('1', 'y');
// l1.delete('x');
// // l1.reverse();
// console.log(l1.detectCircular());

// l1.makeCircular();
// console.log(l1.detectCircular());

l1.print();
// console.log(l1.findPointByValue('1'));


// const list1 = new LinkedList();
// const list2 = new LinkedList();
// list1.append(2);
// list1.append(5);
// list1.append(7);
// list2.append(4);
// list2.append(8);
// list2.append(12);
// console.log(prettyFormat(merge(list1, list2)));






