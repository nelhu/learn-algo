const binarySearch = (array, value) => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (value === array[middle]) {
      return middle;
    } else if (value > array[middle]) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}

const binarySearchRecursive = (array, low, high, value) => {
  if (low > high) return -1;
  const middle = Math.floor((low + high) / 2);
  if (value === array[middle]) {
    return middle;
  } else if (value > array[middle]) {
    return binarySearchRecursive(array, middle + 1, high, value)
  } else {
    return binarySearchRecursive(array, low, middle - 1, value)
  }
}

/**
 * 二分查找变体
 *
 * 查找第一个值等于给定值的元素
 * 查找最后一个值等于给定值的元素
 * 查找第一个值大于等于给定值的元素
 * 查找最后一个值大于等于给定值的元素
 */

// 查找第一个值等于给定值的元素
const binarySearchFirstValue = (array, value) => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (value === array[middle]) {
      let i = middle;
      let point = middle;
      while (i>=low) {
        if (array[i] === value) {
          point = i;
        } else {
          break;
        }
        i--;
      }
      return point;
    } else if (value > array[middle]) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}

// const testArray = [1, 5, 7, 9, 11, 13, 15];
// console.log(binarySearch(testArray, 90));
// console.log(binarySearchRecursive(testArray, 0, testArray.length - 1, 9));

const testArray2 = [1, 2, 2, 2, 6, 8, 8, 8, 11, 18];
console.log(binarySearchFirstValue(testArray2, 8));


