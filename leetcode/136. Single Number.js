/* Given a non-empty numsay of integers, every element appears twice except for one. Find that single one.
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

const singleNumber = function(nums) {

  const numObs= {}

  for(i=0;i<nums.length;i++) {
    if (numObs.hasOwnProperty(nums[i])) {
      delete numObs[nums[i]] 
    } else {
      numObs[nums[i]] = 1
    }
  }
  const a = Object.keys(numObs)
  return parseInt((a[0]))
}

const nums1 = [4, 1, 2, 1, 2]
console.log(singleNumber(nums1))
