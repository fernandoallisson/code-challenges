function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const vowaelCount = (string) => {
  const lowerString = removerAcentos(string.toLowerCase())
  let counter = 0;
  for (const letter of lowerString) {
    if ("aeiou".includes(letter)) { counter += 1 }
  }
  return counter;
}


const string = "Eu amo fernando álisson dos santos" // 13 vogais. 
console.log(vowaelCount(string))