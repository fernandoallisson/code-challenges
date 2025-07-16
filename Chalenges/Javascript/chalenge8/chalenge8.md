# Desafio de Código — Nível 4/10

## Título: Validador de Palíndromos

### Objetivo
Criar uma função que verifique se uma frase ou palavra é um **palíndromo**, desconsiderando espaços, acentos, pontuação e letras maiúsculas/minúsculas.

---

### Enunciado

Um **palíndromo** é uma palavra ou frase que pode ser lida da mesma forma de frente para trás e de trás para frente.  
Exemplos incluem: `"ovo"`, `"Ame a ema"` e `"Socorram-me, subi no ônibus em Marrocos"`.

Sua tarefa é criar uma função que:

- Receba uma string.
- Retorne `true` se for um palíndromo, ou `false` caso contrário.

---

### Regras

- Ignore:
  - Espaços
  - Acentos (ex: "á" deve ser considerado igual a "a")
  - Pontuação
  - Diferença entre maiúsculas e minúsculas
- Considere apenas as **letras do alfabeto**.
- A string vazia (`""`) deve retornar `true`.

---

### Exemplos

| Entrada                                              | Saída   |
|------------------------------------------------------|---------|
| `"Ame a ema"`                                        | `true`  |
| `"Socorram-me, subi no ônibus em Marrocos"`          | `true`  |
| `"Olá mundo"`                                        | `false` |
| `"12321"`                                            | `false` |
| `""`                                                 | `true`  |

---

### Dicas

- Use regex para remover tudo que **não for letra** (ex: `/[^a-zA-ZÀ-ÿ]/g`).
- Para remover acentos, use métodos como `.normalize("NFD").replace(/\p{Diacritic}/gu, "")` em JS, ou funções equivalentes em outras linguagens.
- Converta para minúsculas antes de comparar.

---

### Critérios de Avaliação

1. **Corretude** — Identifica palíndromos corretamente mesmo com acentos e pontuação.
2. **Robustez** — Lida com string vazia e entradas com símbolos ou números.
3. **Clareza** — Código limpo, legível e bem estruturado.
4. **Desempenho** — Funciona bem com strings longas.

---

### Desafio Extra (opcional)

- Faça com que a função retorne, além do `true`/`false`, a **versão "limpa" da string** usada para validação (sem espaços, acentos, etc.).
