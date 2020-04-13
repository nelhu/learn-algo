const throttle = (fn , ms) => {
  let prev = Date.now();
  return function(...args) {
    const now = Date.now();
    if (now - prev > ms) {
      fn.apply(this, args);
      prev = now;
    }
  }
}
const f = p => console.log(p);
const withThrottle = throttle(f, 100);

setTimeout(() => {
  withThrottle(1);
  withThrottle(2);
  withThrottle(3);
  withThrottle(4);
  withThrottle(5);
}, 1000);

