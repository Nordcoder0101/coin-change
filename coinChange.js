function coinChange(num){
  let currency = {
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  }
  while(num > 100){
    currency.dollars += 1
    num -= 100
  }
  while(num > 25){
    currency.quarters += 1
    num -= 25
  }
  while(num > 10){
    currency.dimes += 1
    num -= 10
  }
  while (num > 5){
    currency.nickels += 1
    num -= 5
  }
  currency.pennies = num

  console.log(currency)
  return currency;
}

coinChange(790)