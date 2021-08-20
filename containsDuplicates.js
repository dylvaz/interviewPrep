/*
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  let set = new Set();
  let dupe = false;
  nums.forEach(e => {
    if (set.has(e)) {
      dupe = true;
    } else {
      set.add(e);
    }
  });

  return dupe;
};