// Function that accepts a range of numbers and adds them all up

const recursiveRange = (num) => {
  if (num === 1) {
    return 1
  }

  return num + recursiveRange(num - 1)
  
}

console.log(recursiveRange(6))