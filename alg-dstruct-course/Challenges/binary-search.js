
const binarySearch = function(arr, elem) {

  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left + right) / 2)
  

  while (arr[middle] !== elem && left < right) {

    if (elem < arr[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
    middle = Math.floor((left + right) / 2)

  }
  if(arr[middle] === elem) {
    return middle
  }
  return -1

}

console.log(binarySearch([1,5,7,8,10,25, 54 ,52,66, 8,99,01, 44, 66], 98))