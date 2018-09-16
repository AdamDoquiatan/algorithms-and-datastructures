/* 
Write a function called same, which accepts two arrays. The funciton should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. 
*/ 

/* Colt's Method: Put both arrays in thier own object and compare them property to property*/

/* function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

*/

const array1 = [0, 2, 3]
const array2 = [0, 4, 9]

const same = (arr1, arr2) => {
  //check that array lengths are the same
  if (arr1.length != arr2.length) {
    return false
  }
  //create object to hold first array coun
  const values = {}
  //use if statement to insert or add to count in object
  arr1.forEach((item) => {
    if (values.hasOwnProperty(item * item)) {
      values['' + item * item]++
    } else {
      values['' + item * item] = 1
    }
  })
  //compare values in second array to see if squared version of values in object
  arr2.forEach((item) => {
    if (values.hasOwnProperty(item) && values['' + (item)] > 0) {
      //reduce frequency in object as matches fround
      values['' + (item)]--
      //delete property if it's at zero
      if (values['' + (item)] === 0) {
        delete values['' + (item)]
      }
    //if no match found return false
    } else {
      return false
    }
  })
  //if all match (no more properties in object) return true
  Object.keys(values).length
  return Object.keys(values).length === 0 ? true : false
}

console.log(same(array1, array2))