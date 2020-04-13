/**
 * 
  CirculationQueue(k): 构造器，设置队列长度为 k 。
  Front: 从队首获取元素。如果队列为空，返回 -1 。
  Rear: 获取队尾元素。如果队列为空，返回 -1 。
  enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
  deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
  isEmpty(): 检查循环队列是否为空。
  isFull(): 检查循环队列是否已满。
 */
function CirculationQueue (k) {

  this.maxSize = k + 1;
  this.head = -1;
  this.tail = -1;
  this.data = new Array();

  this.isEmpty = function () {
    return this.head === this.tail;
  }

  this.isFull = function () {
    return this.head === (this.tail + 1) % this.maxSize;
  }

  this.front = function () {
   if (this.isEmpty()) {
    return -1;
   }
   return this.data[this.head];
  }

  this.rear = function () {
   if (this.isEmpty()) {
    return -1;
   }
   return this.data[this.tail - 1]
  }

  this.enQueue = function (value) {
    if (this.head !== -1 && this.tail !== -1 && this.isFull()) {
      console.error('queue is full');
      return false;
    }
    if (this.isEmpty()) {
      this.head = 0;
      this.tail = 0;
    }
    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.maxSize;
    return true;
  }

  this.dequeue = function() {
    if (this.isEmpty()) {
      console.error('queue is empty');
      return false;
    }
    this.data[this.head] = null;
    this.head = (this.head + 1) % this.maxSize;
    return true;
  }

  this.print = function () {
    // return [1, 2,3].reduce((previousValue, current, index) => {
    //   console.error(current);
      
    //   return `${previousValue}-${current}, `
    // }), '';
    return this.data.forEach((element, index) => {
      console.log(index, element);
    });
  }
}

var cq = new CirculationQueue(3);
cq.enQueue('1');
cq.enQueue('2');
cq.enQueue('3');
cq.enQueue('4');
cq.dequeue();
cq.enQueue('4');
cq.enQueue('5');
cq.dequeue();
cq.enQueue('5');
cq.print();

console.log(cq.head);
console.log(cq.tail);
