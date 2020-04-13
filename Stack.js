function Stack () {
  var items = [];
 
  // push
  this.push = function (item) {
    items.push(item);
  }

  // pop
  this.pop = function() {
    items.pop();
  }

  // peek
  this.peek = function() {
    return items[items.length - 1]
  }

  // isEmpty
   this.isEmpty = function () {
    return items.length === 0
  }

  // clear 
  this.clear = function () {
    items.length = 0;
  }

  // size
  this.size = function () {
    return items.length;
  }

  // print
  this.print = function() {
    console.log(items.join(','));
  }
}

 // test
var s1 = new Stack();;
console.log(s1.print());

s1.push('1');
console.log(s1.print());

s1.push('3');
console.log(s1.print());


s1.pop();
console.log(s1.print());

s1.push('5');
console.log(s1.peek());
console.log(s1.print());

console.log(s1.isEmpty());

console.log(s1.size());

s1.clear();
console.log(s1.isEmpty());

