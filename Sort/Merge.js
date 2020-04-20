const mergeSort = array => {
  if (array.length === 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return mergeArray(mergeSort(left), mergeSort(right))
}

const mergeArray = (arr1, arr2) => {
  const res = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    const leftValue = arr1[i];
    const rightValue = arr2[j];
    if (leftValue <= rightValue) {
      res.push(leftValue);
      i++;
    } else {
      res.push(rightValue);
      j++
    }
  }

  let remain = null;
  if (i === arr1.length) {
    remain = arr2.slice(j);
  } else {
    remain = arr1.slice(i)
  }
  return res.concat(remain);
}

let testArr = [];
let index = 0;
while (index < 100) {
  testArr.push(Math.ceil(Math.random() * 100));
  index++;
}
// console.log(testArr);
console.log(mergeSort(testArr));
// console.log(mergeSort([11, 8, 3, 9, 7, 1, 2, 5]));

