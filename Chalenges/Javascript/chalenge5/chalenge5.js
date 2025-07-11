const UniqueString = (string) => {
  const removeAcentos = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const semEspacos = removeAcentos.replace(/\s+/g, "");
  const sortString = semEspacos.split("").sort().join("").toLowerCase()
  
  return sortString;
}

const Anagram = (string1, string2) => {
  const string1Changed = UniqueString(string1)
  const string2Changed = UniqueString(string2)

  if (string1Changed.length != string2Changed.length) { return false }

  const allPresent = [...string1Changed].every(string1Changed => 
    string2Changed.includes(string1Changed));

  return allPresent;
}


console.log(Anagram("Eleven plus two", "Twelve plus one")) // true