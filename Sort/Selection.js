const selection = array => {
  let i = 0;
  while (i < array.length) {
    let j = i;
    let m = j;
    let value = array[m];
    let flags = false;
    while (j < array.length) {
      if (array[j+1] < value) {
        m = j + 1;
        value = array[j+1]
        flags = true;
      }
      j++;
    }
    if (!flags) break;
    const temp = array[i];
    array[i] = array[m];
    array[m] = temp;
    console.log(array);
    i++
  }
  return array;
}

console.log(selection([4, 5, 6, 3, 2, 1]));