/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let occurences = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (occurences.has(diff)) {
      result.push(i);
      result.push(occurences.get(diff));
    } else {
      occurences.set(nums[i], i);
    }
  }
  return result;
};