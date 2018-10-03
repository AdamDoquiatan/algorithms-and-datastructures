// find the least number of coins needed to reach a val

const greedy = function (amount) {

  let amountLeft = amount
  let coins = 0

while (amountLeft > 0.04) {
  if (amountLeft >= 2.00) {
    amountLeft -= 2.00
  } else if (amountLeft >= 1.00) {
    amountLeft -= 1.00
  } else if (amountLeft >= 0.25) {
    amountLeft -= 0.25
  } else if (amountLeft >= 0.10) {
    amountLeft -= 0.10
  } else if (amountLeft >= 0.05) {
    amountLeft -= 0.05
  } 
  coins++
  }
  return coins
}

console.log(greedy(10.40))