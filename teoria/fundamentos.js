// Fundamentos
// var nome = "valor"
var minhaVariavel = "Olá, mundo!"

console.log(minhaVariavel);

// Comentários
/*

Isso
Tudo
É
Um
Comentário

*/

// Variáveis e tipos de dados
var meuNumero = 10;
console.log(meuNumero);
console.log(meuNumero + 5);
console.log("10" + 5);
console.log(typeof meuNumero);

var booleano = true; // false
console.log(typeof booleano);

var meuObjeto = {}
var meuArray = []
var meuNull = null
var meuUndefined = undefined

console.log(typeof meuObjeto)
console.log(typeof meuArray)
console.log(typeof meuNull)
console.log(typeof meuUndefined)

// Let e const
// Novas formas de declarar variáveis
let x = 10
const y = 5

console.log(x, y)

// Operadores aritméticos
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

//Operadores de comparação
console.log(x == y)
console.log(x != y)

console.log("5" == 5)
console.log("5" === 5)

// Operadores lógicos
// AND &&
// OR ||
console.log(10 > 5 && 20 > 5)
console.log(10 > 5 && 20 < 5)
console.log(10 < 5 && 20 < 5)

console.log(10 > 5 || 20 > 5)
console.log(10 > 5 || 20 < 5)
console.log(10 < 5 || 20 < 5)

// Conversão de tipos
const meuNumero2 = "123"

const meuNumeroConvertido = Number(meuNumero2)

console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido)

// Estrutura de condição - if, else, else if

const idade = 20

if(idade < 13) {
    console.log("Criança")
}
else if(idade < 20 ) {
    console.log("Adolescente")
}
else {
    console.log("Adulto")
}

if(false) {
    console.log("Isso executa")
}
else {
    console.log("Isso agora é executado!")
}

// Switch
const fruta = "Mamão"

switch(fruta) {
    case "Banana":
        console.log("Banana é a fruta!")
        break

    case "Maça":
        console.log("Maça é a fruta!")
        break

    default:
        console.log("Fruta não encontrada!")
}

// Estruturas de repetição
for(let i = 0; i < 5; i++) {
    console.log("O valor de i é: " + i)
}


let k = 0

while(k < 5) {
    console.log("O valor de k é: " + k)
    k++
}


let j = 0

do {
    console.log("O valor de j é: " + j)
    j++
} while(j < 5)

// Funções
function cumprimentar(nome) {
    console.log("Olá, " + nome + "!")
}

cumprimentar("João")

// Escopo de variáveis
let cor = "azul"

function mostrarCor() {
    let cor = "verde"

    console.log(cor)
}

console.log(cor)

mostrarCor()

// Hoisting
testeHoistng()

function testeHoistng() {
    console.log("Deu certo!")
}

// Arrow function
const testeArrow = () => console.log("Isso também é uma função.")

testeArrow()

// Truthy e falsy
const minhaVariavel1 = "" // falsy
const minhaVariavel2 = "Algum texto"

if(minhaVariavel1) {
    console.log("É verdadeiro!")
}

else {
    console.log("É falso!") 
}

if(minhaVariavel2) {
    console.log("É verdadeiro! 2")
}

else {
    console.log("É falso! 2") 
}

// Array, listas
const numeros = [1, 2, 3, 4, 5]

console.log(numeros)
console.log(numeros[0])
console.log(numeros[2])

numeros.push(6)
console.log(numeros)

// Prototype => OBJETO -> objeto2
// Array => nossos arrays
numeros.pop()

console.log(numeros)

// Strings
const minhaStringNova = "Olá, Mundo!"

// Concatenação = +
const minhaString3 = minhaStringNova + " Como você está ?"

console.log(minhaString3)

// Interpolação
const minhaString4 = `${minhaStringNova} Como você está ?`
console.log(minhaString4)

console.log(minhaString4.length) // Quantidade de caracteres
console.log(minhaString4[5])
console.log(minhaString4.toUpperCase())

// Data e hora
const agora = Date()
console.log(agora)

const natal = new Date(2023, 11, 25)
console.log(natal)

// Math
console.log(Math.PI)

console.log(Math.round(3.6))

console.log(Math.sqrt(16))

console.log(Math.pow(2, 3))
