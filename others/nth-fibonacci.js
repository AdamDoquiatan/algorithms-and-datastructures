const nthFib = function(length) {


  let num1 = 1
  let num2 = 1
  let numN;

  for (i = 0; i < length - 2; i++) {
    numN = num1 + num2
    num1 = num2
    num2 = numN
  }
  return numN
}

console.log(nthFib(12))