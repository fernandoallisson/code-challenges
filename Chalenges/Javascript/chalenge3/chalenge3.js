const secMaxNumber = (array) => {

  const orderArray = array.sort((a, b) => a - b);
  let maxNumber = orderArray[0];
  let secMaxNumber = 0;

  if(orderArray.length == 0 || orderArray.length == 1) {return null}

  for (const num of orderArray) {

    if(maxNumber < num) {
      secMaxNumber = maxNumber
      maxNumber = num
    }

  }

  return secMaxNumber;
}

console.log(secMaxNumber(list))
