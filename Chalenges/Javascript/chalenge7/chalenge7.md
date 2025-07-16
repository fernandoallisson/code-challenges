# Desafio de Código — Nível 4/10

## Título: Substituir Repetições por Asteriscos

### Objetivo
Criar uma função que substitua todas as ocorrências repetidas de palavras em uma frase por asteriscos (`*`), mantendo apenas a **primeira ocorrência visível**.

---

### Enunciado

Dada uma string contendo uma frase, substitua cada repetição de palavra por `"*"` (apenas a palavra, não a frase inteira).  
A substituição deve ser **case-insensitive** e **ignorar pontuação** ao contar repetições.

---

### Regras

- A primeira vez que uma palavra aparece, ela deve ser mantida.
- Se a mesma palavra aparecer novamente (mesmo que em outra forma de maiúsculas/minúsculas ou com pontuação), deve ser substituída por `"*"`.
- Deve manter a estrutura da frase (espaços e pontuação nos mesmos lugares).
- A palavra `"casa"` e `"Casa"` são consideradas iguais.

---

### Entrada

Uma string contendo uma ou mais frases, por exemplo:  
`"A casa é bonita. A casa tem jardim."`

---

### Saída

Uma string com as palavras repetidas substituídas por `"*"`.  
Para o exemplo acima, a saída seria:  
`"A casa é bonita. * * tem jardim."`

---

### Exemplos

| Entrada                                       | Saída                                   |
|----------------------------------------------|------------------------------------------|
| `"Oi oi OI, tudo bem? Tudo certo."`         | `"Oi * *, tudo bem? * certo."`          |
| `"Testar, testar, TESTAR é bom."`           | `"Testar, *, * é bom."`                 |
| `"Hoje é dia de sol. Hoje é sexta-feira!"`  | `"Hoje é dia de sol. * * sexta-feira!"` |
| `""`                                         | `""`                                     |

---

### Dicas

- Use regex para remover pontuação temporariamente ao contar palavras.
- Use uma estrutura como `Set` ou objeto para controlar as palavras já vistas.
- Substitua apenas a palavra repetida, mantendo o resto da frase original intacto.
- Pode ser útil armazenar os índices ou trabalhar com tokens.

---

### Critérios de Avaliação

1. **Corretude** – Substitui corretamente palavras repetidas sem afetar pontuação ou espaçamento.
2. **Robustez** – Lida com maiúsculas, minúsculas e pontuação corretamente.
3. **Clareza** – Código bem estruturado e de fácil leitura.
4. **Eficiência** – Evita múltiplas passagens desnecessárias sobre a string.

---

### Desafio Extra (opcional)

Crie uma versão que, em vez de substituir por `"*"`, substitui por `"*1*"`, `"*2*"`, etc., indicando quantas vezes aquela palavra já apareceu.

