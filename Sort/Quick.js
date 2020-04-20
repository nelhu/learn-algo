/**
 * 简单快排： 空间复杂度高，不合适
 * @param {*} array
 */
const quickSort = array => {
  if (array.length <= 1) {
    return array;
  }
  const left = [];
  const right = [];
  let i = 0;
  const pivot = array.length - 1;
  const value = array[pivot];
  while (i < pivot) {
    if (array[i] < value) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
    i++;
  }
  return quickSort(left).concat(value).concat(quickSort(right));
}

const quickSortV2 = (array, left, right) => {
  if (left < right) {
    const pivot = right;
    const pivotIndex = partition(array, left, right, pivot);
    quickSortV2(array, left, pivotIndex - 1 < left ? left : pivotIndex - 1);
    quickSortV2(array, pivotIndex + 1 > right ? right : pivotIndex + 1, right);
  }
}
const partition = (array, left, right, pivot) => {
  let start = left;
  let i = left;
  const pivotValue = array[pivot];
  while (i < right) {
    if (array[i] < pivotValue) {
      swap(array, i, start);
      start++
    }
    i++;
  }
  swap(array, start, pivot);
  return start;
}
const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const testArray = [11, 8, 3, 9, 7, 1, 2, 5];
// console.log(quickSort([11, 8, 3, 9, 7, 1, 2, 5]));
quickSortV2(testArray, 0, testArray.length - 1)
console.log(testArray);