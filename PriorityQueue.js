/**
 * [优先队列]: 最小优先队列： priority：1 > priority：2
 * 1. enqueue
 * 2. dequeue
 * 3. peek
 * 4. size
 * 5. isEmpty
 * 6. print
 * 
 */
function PriorityElement (item, priority) {
  this.item = item;
  this.priority = priority;
  this.toString = function () {
    return `${this.item}.${this.priority}`
  }
}

function PriorityQueue () {
  var items = [];

  this.enqueue = function (priorityItem) {
    if (this.isEmpty()) {
      items.push(priorityItem);
    } else {
      for (var i = 0; i < this.size(); i++) {
        var insertPosition = null;
        if (priorityItem.priority < items[i].priority) {
          insertPosition = i;
        }
        if (priorityItem.priority >= items[i].priority) {
          insertPosition = i + 1;
        }
        if (insertPosition !== null) {
          items.splice(insertPosition, 0, priorityItem);
          break;
        }
      }
    }

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

var e1 = new PriorityElement('tom', 1);
var e2 = new PriorityElement('mike', 2);
var e3 = new PriorityElement('jenny', 3);
var e4 = new PriorityElement('nelson', 1);

var q1 = new PriorityQueue();

q1.enqueue(e1);
q1.enqueue(e3);
q1.enqueue(e2);
q1.enqueue(e4);
q1.print();

console.log('------');
