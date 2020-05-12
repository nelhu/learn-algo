/**
 * Hash函数 键值为integer
 */
const hash_for_integer = (integer, arrayLength) => integer % arrayLength;

/**
 * Hash函数 键值为string
 * @param {number} arrayLength HashTable数组长度
 */
const hash_for_string = (str, arrayLength) => {
  let total = 0;
  let i = 0;
  while (i < str.length) {
    total += str.charCodeAt(i)
    i++;
  }
  return total % arrayLength;
}

console.log(hash_for_string('hello,world', 32));
