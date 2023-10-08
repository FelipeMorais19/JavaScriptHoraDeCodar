// Exercício 01 - Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia. Adicione 5 itens à lista usando push(). Agora, remova o primeiro item da lista usando shift(). Imprima a lista final no console.

const marcas = []

marcas.push("Oi", "Vivo", "Claro", "Nextel", "Tim")
console.log(marcas)

marcas.shift()
console.log(marcas)

// Exercício 02 - Manipulação de Array / find()

// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42]. Use a função find() para encontrar o primeiro número que é divisível por 7 e maior que 10.

const numeros = [3, 7, 14, 21, 29, 36, 42]

const numero = numeros.find((num) => num % 7 === 0 && num > 10)
console.log(numero)

// Exercício 03 - Manipulação de Array / filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40]. Use a função filter() para criar um novo array que contenha apenas os números que são maiores que 20.

const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40]

const numerosMaior = numeros2.filter((num) => num > 20)
console.log(numerosMaior)

// Exercício 04 - Manipulação de String / split(), trim()

// Dada a string: " Bom dia, mundo! ". Remova os espaços em branco no início e no final da string e, em seguida, divida a string em palavras.

const frase03 = " Bom dia, mundo! "

const palavras02 = frase03.trim().split(" ")
console.log(palavras02)

// Exercício 05 - Manipulação de String / startsWith(), endsWith()

// Dada a string: "O rato roeu a roupa do rei de Roma". Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".

const frase04 = "O rato roeu a roupa do rei de Roma"
console.log(frase04.startsWith("O") && frase04.endsWith("Roma"))