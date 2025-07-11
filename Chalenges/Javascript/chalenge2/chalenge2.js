const evenOrOdd = (num) => {

  if (num % 0 || num == 0) {
    return(`The number ${num} is Even`)
  }
  
  return `The number ${num} is Odd`
}


console.log(evenOrOdd(0))