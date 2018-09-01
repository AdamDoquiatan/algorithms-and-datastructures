let reverseString = (s) => {
  let reversedStr = s.split('').reverse().join('')
  console.log(reversedStr)
  return reversedStr
}

reverseString('hello')