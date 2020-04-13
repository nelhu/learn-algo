// abbbcc -> acc
// aaaaaaaaaccc -> aaaaaa
// abaa -> abaa
/**
 *
 * @param {*} input 输入任意字符串
 * @returns 去掉3次连续重复字符后的字符串
 */
const match = input => {
  if (typeof input !== 'string') throw new Error('invalid input, please offer string paramter');
  return input.replace(/(\w)\1\1/g, '');
}
