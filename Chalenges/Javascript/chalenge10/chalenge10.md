# Desafio de Código — Nível 5/10

## Título: Conversor de Números para Romanos

### Objetivo
Criar uma função que converta um número inteiro para sua **representação em algarismos romanos**.

---

### Enunciado

Dado um número inteiro positivo `n`, converta-o para **algarismos romanos**.

Você deve implementar a função sem usar bibliotecas prontas de conversão.

---

### Regras

- O número será sempre **entre 1 e 3999**.
- A saída deve ser uma **string** com a representação romana correta.
- A função deve lidar com casos especiais como 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD), e 900 (CM).

---

### Algarismos Romanos Básicos

| Algarismo | Valor |
|-----------|-------|
| I         | 1     |
| V         | 5     |
| X         | 10    |
| L         | 50    |
| C         | 100   |
| D         | 500   |
| M         | 1000  |

---

### Entrada

Um número inteiro `n` tal que `1 ≤ n ≤ 3999`.

---

### Saída

Uma **string** representando o número em algarismos romanos.

---

### Exemplos

| Entrada | Saída  |
|---------|--------|
| `1`     | `I`    |
| `4`     | `IV`   |
| `9`     | `IX`   |
| `58`    | `LVIII`|
| `1994`  | `MCMXCIV` |
| `3999`  | `MMMCMXCIX` |

---

### Dicas

- Use uma **lista de pares valor–símbolo**, do maior para o menor.
- Enquanto o número de entrada for maior ou igual ao valor, subtraia-o e concatene o símbolo correspondente na resposta.
- Exemplo de par: `(1000, "M")`

---

### Critérios de Avaliação

1. **Corretude** – Converte corretamente qualquer número entre 1 e 3999.
2. **Clareza** – Código bem estruturado e com boas práticas de nomeação.
3. **Robustez** – Lida bem com limites (1 e 3999).
4. **Eficiência** – Uso adequado de estruturas e controle de fluxo sem loops desnecessários.

---

### Desafio Extra (opcional)

- Crie uma função **inversa** que converta de romano para inteiro.
