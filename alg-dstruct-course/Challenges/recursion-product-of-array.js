// Multiply the contents of an array recursively

const productOfArr = function(arr) {
  if (arr.length === 0) {
    return 1
  }
console.log(arr)
  return arr[arr.length - 1] * productOfArr(arr.slice(0, arr.length - 1))
  
} 

console.log(productOfArr([1, 2, 3, 4]))