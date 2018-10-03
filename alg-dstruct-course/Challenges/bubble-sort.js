
const bubbleSort = function (arr) {

  for (j = 0; j < arr.length; j++) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1] && arr[i + 1] !== undefined) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort([1, 4, 3, 2, 5]))

