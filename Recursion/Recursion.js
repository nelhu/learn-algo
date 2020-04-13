/**
 * 求1+2+3+...+n的值
 */
const resolved = {};
const sum = n => { // 递归方式
  // 防止内存溢出
  if (n > 1000) throw new Error('Memory Overflow Exception');
  if (n === 1)  return 1;
  // 防止重复计算
  const resolvedValue = resolved[n-1];
  const value =  resolvedValue ? resolved : sum(n - 1);
  resolved[n-1] = value;
  return value + n;
}


// 非递归方式
const sumv2 = n => {
  let i = 1;
  let res = 0;
  while (i <= n) {
    res = res + i;
    i++;
  }
  return res;
}
console.log(sum(50));
console.log(sumv2(50));





