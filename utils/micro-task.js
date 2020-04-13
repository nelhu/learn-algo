new Promise(resolve => resolve('resolve')).then(r => console.log(r));

setTimeout(() => {
  console.log('in timeout 0');
}, 0);
setTimeout(() => {
  console.log('in timeout 1');
}, 0);
setTimeout(() => {
  console.log('in timeout 100');
}, 100);

console.log('main task');
