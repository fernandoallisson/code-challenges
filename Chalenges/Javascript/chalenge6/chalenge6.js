const uniqueWord = (string) => {
  const conjunto = new Set();
  const setString = string.toLowerCase()
  const semPontuacao = setString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'…]/g, "").split(" ");

  for(const word of semPontuacao) {
    if (!conjunto.has(word)) {
      conjunto.add(word)
    }
  }

  return conjunto.size

}


console.log(uniqueWord("Eu te amo, Augusto!"))