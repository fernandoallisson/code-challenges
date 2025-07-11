Título: Segundo Maior Valor Único

| Objetivo | Implementar uma função que encontre o segundo maior número distinto em uma lista de inteiros. |

Enunciado
Dada uma lista (array) de números inteiros, retorne o segundo maior valor único presente nela.

Se não existir um segundo valor distinto (lista vazia, um único elemento, ou todos os elementos iguais), retorne null / None / undefined (conforme a linguagem) ou um valor especial indicado na assinatura.

Requisitos
Entrada

Um array nums com 0 ≤ len(nums) ≤ 10 000 elementos inteiros.

Saída

O segundo maior valor distinto como inteiro.

Caso não exista, retorne null/None/undefined.

Restrições

Complexidade de tempo O(n).

Espacial O(1) extra (além do array) — não vale ordenar com .sort() se isso usar memória adicional significativa.

Não usar bibliotecas externas (apenas as padrão da linguagem).

Exemplos
Entrada	Saída
[3, 5, 1, 2, 4]	4
[7, 7, 7]	null
[10]	null
[8, 9, 9, 8, 10, 6]	9
[]	null

Dicas
Mantenha duas variáveis: max1 (maior) e max2 (segundo maior).

Ao percorrer o array, atualize ambas quando encontrar um número maior que max1 ou um número entre max1 e max2.

Lembre‑se de ignorar valores iguais a max1 para garantir unicidade.

Critérios de Avaliação
Corretude – Retorna corretamente em listas com valores repetidos, negativos, vazias, e de tamanho 1.

Complexidade – Percorre o array apenas uma vez (O(n)) e usa poucas variáveis auxiliares.

Legibilidade – Código claro, nomes significativos, sem lógica confusa.

Robustez – Trata casos de borda sem lançar exceção indevida.