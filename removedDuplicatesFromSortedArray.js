/*
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
      if(nums[i + 1] === nums[i]) {
        nums[index++] = nums[i];
      }  
    }
    return index;
};