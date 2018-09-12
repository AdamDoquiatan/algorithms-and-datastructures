// Write a function called maxSubarraySum which accepts an array of integers and a number called n.The function should calculate the maximum sum of n consecutive elements in the array.
//Record: 30 mins


function maxSubarraySum(arr, num){
  if (num > arr.length) {
    return null
  }

  let temp = 0;
  let maxSum = 0;

  for (i = 0; i < num ; i++) {
    temp += arr[i]
    console.log(arr[i])
  }

  maxSum = temp

  for (j = num; j < arr.length; j++) {
    temp = temp - arr[j - num] + arr[j]
    maxSum = Math.max(maxSum, temp)
  }

 return console.log(maxSum)
}



maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
// maxSubarraySum([4, 2, 1, 6], 1) // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
// maxSubarraySum([], 4) // null