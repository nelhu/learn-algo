function create(proto, props) {
  function F() {}
  F.prototype = proto;
  F.prototype.constructor = F;
  return Object.assign(new F(), props);
}

var o1 = create({ name: 'tom' }, { age: 23 });
console.log(o1.name);
