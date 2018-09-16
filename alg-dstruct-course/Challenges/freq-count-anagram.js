/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. */

//Create function header that accepts 2 arguments
//If strings length not equal return false
//Create object for holding chars in first string
//fill object with chars from frist string by using a loop, adding to a count if chars are the same
//use a loop to compare the chars of the second string against the chars in the object, decrementing the appropriate char each time
//If all char in string not found in object return false, otherwise decrement it
//if loop reaches end of string return true

const isAnagram = (str1, str2) => {
if(str1.length != str2.length) {
  return false
}

let chars = {}

for(i = 0; i < str1.length; i++) {
  if (chars.hasOwnProperty(str1[i])) {
    chars[str1[i]]++
  } else {
    chars[str1[i]] = 1
  }
}

console.log(chars)

for(i = 0; i < str2.length; i++) {
  if (chars.hasOwnProperty(str2[i]) && chars[str2[i]] != 0) {
    chars[str2[i]]--
  } else {
    return false
  }
}
  return true
}

console.log(isAnagram('anagram', 'agranam'))