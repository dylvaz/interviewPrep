/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
*/
const intersect = function (nums1, nums2) {
  let num1FrequencyMap = new Map();
  let num2FrequencyMap = new Map();
  let result = [];

  nums1.forEach(e => {
    num1FrequencyMap.set(e, num1FrequencyMap.get(e) + 1 || 1);
  });

  nums2.forEach(e => {
    num2FrequencyMap.set(e, num2FrequencyMap.get(e) + 1 || 1);
  });
  

  const addElement = (arr, e, times) => {
    for (let i = 0; i < times; i++) {
      arr.push(e);
    }
  };

  if (num2FrequencyMap.size <= num1FrequencyMap.size) {
    for (let [key, value] of num2FrequencyMap) {
      if (!result.includes(key) && num1FrequencyMap.has(key)) {
        if (num1FrequencyMap.get(key) >= value) {
          addElement(result, key, value);
        } else {
          addElement(result, key, num1FrequencyMap.get(key));
        }
      }
    }
  }

  if (num1FrequencyMap.size < num2FrequencyMap.size) {
    for (let [key, value] of num1FrequencyMap) {
      if (!result.includes(key) && num2FrequencyMap.has(key)) {
        if (num2FrequencyMap.get(key) >= value) {
          addElement(result, key, value);
        } else {
          addElement(result, key, num2FrequencyMap.get(key));
        }
      }
    }
  }
  return result;
};

let arr1 = [4,9,5];

let arr2 = [9,4,9,8,4];

intersect(arr1, arr2);
