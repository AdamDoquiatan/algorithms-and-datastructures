/* Write a program that outputs the string representation of numbers from 1 to n (in an array)

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.For numbers which are multiples of both three and five output “FizzBuzz”.
*/





















const fizzBuzz = (n) => {
  let arr = []

  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzbuzz")
    }
    else if (i % 3 == 0) {
      arr.push("fizz")
    }
    else if (i % 5 == 0) {
      arr.push("buzz")
    }
    else
      arr.push(i.toString())
  }
  return arr
}

console.log(fizzBuzz(20))