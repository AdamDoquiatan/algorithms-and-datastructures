let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]

const arrayMerger = function(arr1, arr2){
  let newArr = []
  let length = 0

  if (arr1.length < arr2.length) {
    length = arr2.length
  } else if (arr1.length > arr2.length) {
    lenth = arr1.length
  } else {
    length = arr1.length
  }
  for (i = 0; i < length; i++) {
    
    if (arr1[i]) {
      newArr.push(arr1[i])
    }

    if (arr2[i]) {
      newArr.push(arr2[i])
    }

  }
  return newArr
}

console.log(arrayMerger(arr1, arr2))