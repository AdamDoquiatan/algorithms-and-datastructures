// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
if (arr.length === 0) {
  return 0;
}
  let i = arr[0];

  for (j = 1; j < arr.length; j++ ) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  console.log(arr.indexOf(arr[i]) + 1)
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 14, 14, 16])