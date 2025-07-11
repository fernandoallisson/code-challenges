// Method 01
const sum1 = (array) => {

  let suma = 0;

  if (array.length > 0) {
    for (let i = 0; i < array.length; i+= 1) {
      suma += array[i];
    }
    return suma;
  }
  else {
    return(0)
  }
}

// Method 02
const sum2 = array => 
  array.length > 0 ? array.reduce((acc, val) => acc + val, 0) : 0;

// Method 03
const sum3 = (array) => {

  let suma = 0;
  if(array.length > 0) {
    for (const number of array) {
      suma += number;
    }
  }
  return suma;
}




const list = [1, 2, 3, 4, 5]
const list2 = []
const list3 = [-3, 2]

console.log("A soma com a função 1 é: " + sum1(list))
console.log("A soma com a função 2 é: " + sum2(list))
console.log("A soma com a função 2 para a lista 2 é: " + sum2(list2))
console.log("A soma com a função 2 para a lista 3 é: " + sum2(list3))
console.log("A soma com a função 3 para a lista 1 é: " + sum3(list))
console.log("A soma com a função 3 para a lista 2 é: " + sum3(list2))




