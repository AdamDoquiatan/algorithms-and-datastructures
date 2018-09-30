/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

let hammingDistance = function (x, y) {

  let bin1 = x.toString(2)
  let bin2 = y.toString(2)
  let hammingDist = 0;

  if (bin1.length > bin2.length) {
    let prepend = ''
    for (i = 0; i < bin1.length - bin2.length; i++) {
      prepend = prepend + '0'
    }
    bin2 = "" + prepend + bin2
    console.log(bin2)
  } else if (bin1.length < bin2.length) {
    let prepend = ''
    for (i = 0; i < bin2.length - bin1.length; i++) {
      prepend = prepend + '0'
    }
    bin1 = "" + prepend + bin1
  }

  for (i = 0; i < bin1.length; i++) {
    if (bin1.charAt(i) != bin2.charAt(i)) {
      hammingDist++
    }
  }
  console.log(bin1)
  console.log(bin2)
  return hammingDist
}



console.log(hammingDistance(17, 4))
