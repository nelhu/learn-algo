const prettyFormat = require('pretty-format');

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * 基于数组的顺序队列
 */
class ArrayBasedQueueV1 {
  constructor() {
    this.items = [];
  }
  enQueue(value) {
    this.items.push(value);
  }
  deQueue() {
    return this.items.shift();
  }
  print() {
    console.log(prettyFormat(this.items));
  }
}

/**
 * 基于数组的顺序队列
 */
class ArrayBasedQueueV2 {
  constructor(length) {
    this.length = length;
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }
  isEmpty() {
    return this.head === this.tail;
  }
  enQueue(value) {
    if (this.tail === this.length) {
      if (this.head === 0) {
        // 队列满
        console.log('queue is full');
        return ;
      } else {
        // 队列未满，数据搬移
        const space = this.head;
        while (this.head < this.length) {
          this.items[this.head - space] = this.items[this.head];
          this.head++;
        }
        this.head = 0;
        this.tail = this.tail - space;
      }
    }
    this.items[this.tail] = value;
    this.tail++;
  }
  deQueue() {
    if (this.isEmpty()) {
      console.log('queue is empty');
      return ;
    };
    const value = this.head;
    this.items[this.head] = null;
    this.head++;
    return value;
  }
  print() {
    console.log(prettyFormat(this.items));
  }
}



/**
 * 基于数组的循环队列
 */
class ArrayBasedCircularQueue {
  constructor(length) {
    this.length = length;
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }
  isFull() {
    return (this.tail + 1) % this.length === this.head
  }
  isEmpty() {
    return this.head === this.tail;
  }
  enQueue(value) {
    if (this.isFull()) {
      console.log('queue is full');
      return ;
    }
    this.items[this.tail] = value;
    this.tail = (this.tail + 1) % this.length;
  }
  deQueue() {
    if (this.isEmpty()) {
      console.log('queue is empty');
      return ;
    };
    const value = this.head;
    this.items[this.head] = null;
    this.head = (this.head + 1) % this.length;
    return value;
  }
  print() {
    console.log(prettyFormat(this.items));
  }
}

/**
 * 基于链表的链式队列
 */
class LinkedListBasedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enQueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return ;
    }
    this.tail.next = node;
    this.tail = node;
  }
  deQueue() {
    if (!this.head) {
      console.log('queue is empty');
      return ;
    }
    const value = this.head.data;
    this.head = this.head.next;
    return value;
  }
  print() {
    console.log(prettyFormat(this.head));
  }
}


/**
 * 阻塞队列
 */

/**
 * 并行队列
 */


const q1 = new ArrayBasedQueueV1();
const q2 = new ArrayBasedQueueV2(3);
const q3 = new ArrayBasedCircularQueue(3);
const q4 = new LinkedListBasedQueue();
q4.enQueue(1);
q4.enQueue(2);
q4.enQueue(3);
q4.deQueue();
q4.deQueue();
q4.deQueue();
q4.deQueue();
q4.print();

