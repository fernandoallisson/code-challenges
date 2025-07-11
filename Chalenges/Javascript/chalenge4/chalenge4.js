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

