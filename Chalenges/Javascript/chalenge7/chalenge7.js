const removeSign = (string) => {
  const removeAcentos = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const semPontuacao = removeAcentos.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'…]/g, "").split(" ");

  return semPontuacao;
}

console.log(removeSign("Eu te amo, FErnando"))

const changeString = (string) => {

}