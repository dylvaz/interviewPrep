/*
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
  let resultString = '';
  let resultNumber = 0;

  s = s.trim();

  if (s.charAt(0) === '+' || s.charAt(0) === '-') {
    resultString += s.charAt(0);
    s = s.substring(1);
  }

  for (let i = 0; i < s.length; i++) {
    let currentChar = s.charAt(i);
    if (/\d/g.test(currentChar)) {
      resultString += currentChar;
    } else {
      break;
    }
  }

  if (resultString.length === 0) {
    return 0;
  } else {
    resultNumber = parseInt(resultString);
  }
 console.log(resultNumber) 

  if (resultNumber > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (resultNumber < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else if (isNaN(resultNumber)) {
    return 0;
  } else {
    return resultNumber;
  }

};

let j = "+-12";

console.log(myAtoi(j));
