/**
 * 冒泡排序
 * 4 5 6 3 2 1 从小到大排序
 */
const bubble = array => {
  let length = array.length;
  let i = 0;
  while (i < length - 1) {
    let j = 0;
    let flag = false;
    while (j < length - 1 - i) { // 避免无用比较
      if (array[j] > array[j+1]) {
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        flag = true;
      }
      j++;
    }
    if (!flag) break; // 避免无用比较
    i++;
  }
  return array;
}

console.log(bubble([4, 5, 6, 3, 2, 1]));

