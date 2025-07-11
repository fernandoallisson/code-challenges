## Desafio nível 2/10

Título: Contador de Vogais

| Objetivo | Criar uma função que conte quantas vogais existem em uma string. |

📝 Enunciado
Dada uma string qualquer, escreva uma função que conte o número de vogais (a, e, i, o, u) presentes nela.

A contagem deve ser case-insensitive (ou seja, A e a contam como uma vogal).

Apenas letras devem ser consideradas (ignorando números e símbolos).

✅ Requisitos
Entrada

Uma string de qualquer tamanho, contendo letras, números, espaços ou símbolos.

Saída

Um número inteiro representando quantas vogais existem na string.

🧪 Exemplos
Entrada	Saída
"Olá, mundo!"	4
"123 abc DEF"	3
"bcdfgh"	0
"AEIOUaeiou"	10
""	0

💡 Dicas
Use um conjunto ou array com as vogais (['a','e','i','o','u']).

Converta todos os caracteres para minúsculo antes de verificar.

Pode usar for, for…of, forEach ou qualquer método de iteração simples.

🎯 Critérios de Avaliação
Corretude – A função retorna o valor certo em todos os casos (inclusive com acentos, espaços e símbolos).

Simplicidade – A função é clara e direta.

Case-insensitive – Funciona independentemente de maiúsculas ou minúsculas.

Desempenho – Lê a string uma única vez (O(n)).