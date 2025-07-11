## Desafio nível 3/10

# Título: Anagrama ou Não

| Objetivo | Criar uma função que determine se duas palavras são anagramas uma da outra. |

📝 Enunciado
Duas palavras são anagramas se contêm as mesmas letras, na mesma quantidade, mas em ordens diferentes.

Escreva uma função que receba duas strings e retorne true se elas forem anagramas, ou false caso contrário.

✅ Regras
Ignore maiúsculas/minúsculas (case-insensitive).

Ignore espaços em branco.

Considere apenas letras (desconsidere pontuação e números).

📥 Entrada
Duas strings, por exemplo: "amor" e "Roma".

📤 Saída
true ou false.

🧪 Exemplos
Entrada	Saída
"amor", "roma"	true
"Listen", "Silent"	true
"hello", "world"	false
"Eleven plus two", "Twelve plus one"	true

💡 Dicas
Converta tudo para minúsculo.

Remova espaços e símbolos usando regex ou métodos de string.

Uma solução simples é ordenar as letras das palavras e comparar.

Alternativamente, pode usar dicionários/objetos para contar letras.

🎯 Critérios de Avaliação
Corretude – Passa todos os testes, incluindo casos com espaços e letras repetidas.

Robustez – Ignora diferenças irrelevantes (espaços, letras maiúsculas).

Clareza – Código limpo e bem estruturado.

Eficiência – Idealmente O(n log n) (se ordenar), ou O(n) (se usar contagem de caracteres).