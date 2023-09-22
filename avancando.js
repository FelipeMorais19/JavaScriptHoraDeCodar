// Avançando em JavaScript
// Manipulação de arrays 
const frutas = ["Maça", "Laranja"]

frutas.unshift("Acerola")
console.log(frutas)

frutas.shift()
console.log(frutas)

// Map, filter, reduce -> arrow function
const numeros = [1, 2, 3, 4, 5, 6]

// Find => retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0)

console.log(numeroPar)

// Find => retorna todos os elementos que batem com o critério
const numerosPares = numeros.filter((num) => num % 2 === 0)

console.log(numerosPares)

// Manipulação de strings
const frase = " Olá, mundo!  "

const palavras = frase.trim().split(" ")

console.log(frase)
console.log(palavras)

const frase2 = "JavaScript é incrível!"

console.log(frase2.startsWith("Java"))
console.log(frase2.endsWith("!"))

// Exceções e tratamentos de erros
const idade = 15

/*
if(idade < 18) {
    throw new Error("Você deve ter pelo menos 18 anos!")
}
*/

try {
    const idade = 15
    if(idade < 18) {
        throw new Error("Você deve ter pelo menos 18 anos!")
    }
} 
catch (error) {
    console.log(error.message)
}

console.log("continuando o programa...")

// Callback => função
function cumprimentar(nome, callback) {
    console.log("Olá, " + nome)
    callback()
}

function mostrarSaudacao() {
    console.log("Como você está ?")
}

cumprimentar("Matheus", mostrarSaudacao)

cumprimentar("Maria", function() {
    console.log("Ta tudo bem ?")
})

// Settimeout => depois de um tempo executa algo, uma vez 
function mostrarMensagem() {
    console.log("Essa mensagem será exibida após 3 segundos.")
}

// 1000ms = 1s
setTimeout(mostrarMensagem, 3000)

setTimeout(function() {
    console.log("Oi")
}, 3000)

// Promises
const promessa = new Promise((resolve, reject) => {
    const condicao = true

    if(condicao) {
        resolve("A condição é verdadeira!")
    }
    else {
        reject("A condição é falsa!")
    }
})  

promessa.then((mensagem) => {
    console.log(mensagem)
})