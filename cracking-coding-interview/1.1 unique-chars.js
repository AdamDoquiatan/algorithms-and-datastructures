/* 
Implement an algorithym to determine if a string has all unique characters. What if you cannot use additional data structures?
*/


// With additional datastructures
const uniqueChars = function(s) {

  const checked = {}

  for (i = 0; i < s.length; i++) {
    if(checked.hasOwnProperty(s.charAt(i))) {
      return false;
    } else {
      checked[s.charAt(i)] = 1
    }
  }
  return true
}

console.log(uniqueChars("hello world"))
console.log(uniqueChars("narf goble"))