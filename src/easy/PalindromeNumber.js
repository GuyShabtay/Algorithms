/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let originalText=x.toString();
  let backwardsText=originalText.split('').reverse().join('');
  console.log(originalText)
  console.log(backwardsText)
  return (!(originalText.localeCompare(backwardsText)))
};