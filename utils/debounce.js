const debounce = (fn ,ms) => {
  let timer = null;
  return function(...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, ms);
  }
}

const f = p => console.log(p);
const withDebounce = debounce(f, 100);
const withThrottle = throttle(f, 100);

withDebounce(1);
withDebounce(2);
withDebounce(3);
setTimeout(() => {
  withDebounce(5);
}, 300);
