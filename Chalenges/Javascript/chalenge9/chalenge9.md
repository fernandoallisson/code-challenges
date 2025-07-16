# Desafio de Código — Nível 5/10

## Título: Agrupando Palavras por Anagrama

### Objetivo
Criar uma função que agrupe palavras que são **anagramas** umas das outras.

---

### Enunciado

Dado um array de palavras, agrupe todas que forem anagramas umas das outras.  

Duas palavras são anagramas se contêm **as mesmas letras** com **a mesma frequência**, ignorando a ordem.

Você deve retornar um array de grupos, onde cada grupo é uma lista de palavras anagramas entre si.

---

### Regras

- A comparação deve ser **case-insensitive**.
- A ordem dos grupos e das palavras dentro dos grupos **não importa**.
- Palavras únicas (sem anagramas) devem formar um grupo sozinhas.

---

### Entrada

Um array de strings, por exemplo:

```js
["listen", "silent", "enlist", "banana", "nabana", "google"]


Um array de arrays, agrupando os anagramas:

[
  ["listen", "silent", "enlist"],
  ["banana", "nabana"],
  ["google"]
]

Exemplos
Entrada	Saída esperada
["roma", "amor", "maro", "carro"]	[["roma", "amor", "maro"], ["carro"]]
["a", "A", "b", "B"]	[["a", "A"], ["b", "B"]]
[]	[]

Dicas
Uma forma eficiente é usar um objeto/mapa onde a chave é a palavra ordenada (sorted), e o valor é a lista de palavras anagramas.

Exemplo: "roma" → "amor" → "amor" (chave)

Use toLowerCase() para garantir comparação correta.

Critérios de Avaliação
Corretude – Agrupa corretamente todos os anagramas.

Eficiência – Idealmente, complexidade de tempo O(n * k log k) onde n é o número de palavras e k é o tamanho médio da palavra.

Clareza – Código limpo, com bons nomes e bem estruturado.

Robustez – Funciona com palavras maiúsculas/minúsculas, entradas vazias, e palavras isoladas.

Desafio Extra (opcional)
Retornar os grupos ordenados alfabeticamente internamente.

Ordenar os grupos por tamanho (maior grupo primeiro).


