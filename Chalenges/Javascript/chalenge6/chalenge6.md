# Desafio de Código — Nível 3/10

## Título: Contagem de Palavras Únicas

### Objetivo
Criar uma função que conte quantas palavras **únicas** existem em uma string de texto.

---

### Enunciado

Dada uma string contendo várias palavras, escreva uma função que retorne o número de palavras distintas presentes nela.

---

### Regras

- A comparação deve ser **case-insensitive** (ex: "Casa" e "casa" são a mesma palavra).
- Considere que palavras são separadas por espaços ou pontuação (vírgulas, pontos, exclamações, etc.).
- Remova pontuação antes de contar.
- Ignore palavras vazias.

---

### Entrada

Uma string de texto, por exemplo:  
`"Olá, mundo! Olá, pessoal."`

---

### Saída

Um número inteiro representando a quantidade de palavras únicas.  

Para o exemplo acima, a saída seria: `3` (palavras: "olá", "mundo", "pessoal").

---

### Exemplos

| Entrada                            | Saída |
|----------------------------------|-------|
| `"JavaScript é legal. JavaScript é divertido!"` | `4` (javascript, é, legal, divertido) |
| `"Teste teste TESTE."`            | `1`   |
| `""`                             | `0`   |
| `"Uma, duas, três, duas!"`       | `3`   |

---

### Dicas

- Converta o texto para minúsculas.
- Remova caracteres de pontuação com regex (ex: `/[^\w\s]/g`).
- Separe o texto em palavras usando `split` por espaço.
- Use uma estrutura de dados para guardar palavras únicas (Set, objeto, dicionário).

---

### Critérios de Avaliação

1. Corretude — Conta corretamente palavras únicas, independente de maiúsculas/minúsculas e pontuação.
2. Robustez — Lida bem com strings vazias e caracteres especiais.
3. Clareza — Código organizado, funções e variáveis com nomes claros.
4. Eficiência — Percorre a string e processa as palavras em tempo O(n).

