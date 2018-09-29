/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Note:
You must do this in -place without making a copy of the array.
Minimize the total number of operations.
*/
// input [1, 0, 0, 5, 0, 7, 2]
// output [1, 5, 7, 2, 0, 0, 0]

const moveZeroes = function(nums) {

  let spliceOffset = 0

  for (i = 0; i < nums.length; i++) {
    if (nums[i - spliceOffset] === 0) {
      nums.splice(i - spliceOffset, 1)
      nums.push(0)
      console.log(nums)
      spliceOffset++
    }
  }
};

moveZeroes([1, 0, 2, 0, 0, 5, 8, 0, 7, 2])