// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.There can be negative numbers in the array, but it will always be sorted.
// Record: 8 mins


const sumZero = function(arr) {
  let left  = 0;
  let right = arr.length -1

  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return console.log(arr[left], arr[right])
    } else if (arr[left] + arr[right] > 0) {
      right--
    } else {
      left++
    }
  }
  return console.log('nope')
}

sumZero([-3, -3, -2, -1, 0, 1, 2, 3, 4 ,5])