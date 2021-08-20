/*
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let map = new Map();
  
  nums.forEach(e => {
    map.set(e, map.get(e) + 1 || 1);
  });
  

  for(let [key, value] of map) {
    if(value === 1) {
      return key
    }
  }
};

//bit-manipulation to remove duplicates
const singleNumber = (nums) => {
  let result = 0;
  for(let i = 0; i < nums.length; i++) {
    result^= nums[i];
  }
  return result;
}