/*
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function (nums, k) {
  if (nums.length <= 1 || nums.length === null) {
    return;
  }
  const reverse = (array, start, end) => {
    while (start < end) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
    }
  }
  reverse(nums, 0 , nums.length-1);
  reverse(nums, 0, k-1);
  reverse(nums, k, nums.length-1);
};

let array1 = [1,2,3,4,5,6,7];

rotate(array1, 3);

console.log(array1); //[5,6,7,1,2,3,4]