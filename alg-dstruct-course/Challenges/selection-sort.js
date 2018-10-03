

const selectionSort = function(arr) {
  for(i = 0; i < arr.length; i++) {
    
    let lowest = i

    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] = temp
  }
return arr
}

console.log(selectionSort([5,3,2,6,1,4]))