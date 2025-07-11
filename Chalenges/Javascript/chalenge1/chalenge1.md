Enunciado
Dado um array (ou lista) de números inteiros, retorne a soma de todos os seus elementos.

Requisitos
Entrada

Um array de n números inteiros (onde 0 ≤ n ≤ 10 000).

O array pode estar vazio.

Saída

Um único número inteiro representando a soma dos elementos.

Se o array estiver vazio, a soma deve ser 0.

Restrições

Sem usar bibliotecas externas além das básicas da linguagem escolhida.

Complexidade temporal O(n) e espacial O(1) além do próprio array.

Exemplos
Entrada	Saída
[1, 2, 3, 4, 5]	15
[-10, 20, -30, 40]	20
[]	0

Dicas
Use um laço simples (for, for…of, foreach, etc.) ou um método de agregação da linguagem (por exemplo, reduce em JavaScript) para acumular a soma.

Lembre‑se de inicializar o acumulador em 0.

Critérios de Avaliação
Corretude – Retorna o resultado esperado para casos básicos, negativos, grandes e vazios.

Complexidade – Mantém O(n) de tempo e O(1) de memória extra.

Legibilidade – Código claro, nomes de variáveis significativos e comentários sucintos (se necessários).

Estrutura – Função ou método separado que receba apenas a entrada necessária e produza a saída.

