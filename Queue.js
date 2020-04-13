/**
 * 1. enqueue
 * 2. dequeue
 * 3. peek
 * 4. size
 * 5. isEmpty
 * 6. print
 * 
 */
function Queue () {
  var items = [];

  this.enqueue = function (item) {
    items.push(item);
  }

  this.dequeue = function () {
    return items.shift();
  }

  this.peek = function () {
    return items[0];
  }

  this.size = function () {
    return items.length;
  }

  this.isEmpty = function () {
    return items.length === 0;
  }

  this.print = function () {
    return console.log(items.join('-'));
  }

}

var q1 = new Queue();
q1.enqueue('1');
q1.enqueue('2');
q1.enqueue('3');
q1.dequeue();
q1.dequeue();
q1.print();

console.log('------');
console.log(q1.peek());
console.log(q1.size());
console.log(q1.isEmpty());
