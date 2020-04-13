const insertion = array => {
  let i = 1;
  while (i < array.length) {
    const value = array[i];
    let j = i -1;
    while (j >= 0) {
      if (array[j] < value) {
        break;
      } else {
        array[j+1] = array[j]
      }
      j--;
    }
    array[j+1] = value;
    i++;
  }
  return array;
}

console.log(insertion([4, 5, 6, 3, 2, 1]));