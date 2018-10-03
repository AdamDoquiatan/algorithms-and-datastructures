// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

//Return the nth fibonacci number

function fib(count) {

  if(count <= 2) {
    return 1
  }

  return fib(count - 1) + fib(count - 2)

}

console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
console.log(fib(35))

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465