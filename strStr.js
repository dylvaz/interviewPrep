/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if(needle.length === 0) {
    return 0;
  }
  return haystack.indexOf(needle);

  
  
};

let x = 'hello';
let y = 'll';

console.log(strStr(x,y));
