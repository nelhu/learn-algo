function P(name) {
  this.name = name;
}

function myNew(C, ...args) {
  const instance = Object.create(C.prototype);
  const res = C.apply(instance, args);
  return typeof res === 'object' ? res : instance
}

const p = new P('tom');
const p1 = myNew(P, 'tom');
console.log(p1);

console.log(p1.__proto__ === p1.constructor.prototype);
console.log(p1.__proto__ === P.prototype);
console.log(p1.constructor === P);

// myNew(P, 'tom');
