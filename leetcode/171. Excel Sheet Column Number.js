/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...

Example 1:
Input: "A"
Output: 1

Example 2:
Input: "AB"
Output: 28

Example 3:
Input: "ZY"
Output: 701
*/


//create variable to hold total count
//use get charCodeAt to get ascii value
//subtract value of A then add 1 to get char numerical value
//add to total count


const titleToNumber = function (s) {

  let count = 0;
  const asciiA = 65
  const letters = 26

  for (i = 0; i < s.length; i++) {
    const code = (s.charCodeAt(i) - (asciiA) + 1)
      count += (code) * Math.pow(letters,  (s.length - 1 - i))
  }
  return count 
}

console.log(titleToNumber("AAA"))