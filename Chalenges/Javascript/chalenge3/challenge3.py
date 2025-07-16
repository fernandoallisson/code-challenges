def maior(lista):
    novaLista = []
    for num in lista:
        if num not in novaLista:
            novaLista.append(num)
    novaLista.sort()
    if len(novaLista) < 2:
        return None
    return novaLista[-2]

numeros = [7,7,7,8,8,8,9,9,9]
print(maior(numeros))
