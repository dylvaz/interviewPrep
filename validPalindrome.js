/*
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let forwardString = s.toLowerCase().replace(/[^\w] _/g, '');

  forwardString = forwardString.replace('_', '')

  let reverse = (k) => {
    return Array.from(k).reverse().join('');
  }

  let reverseString = reverse(forwardString);
  console.log(forwardString, reverseString);

  if(reverseString === forwardString) {
    return true;
  } else {
    return false;
  }
};


let j ="ab_a";

console.log(isPalindrome(j));