// DOM - Document Object Model

// Selecionar elementos
const elementoPorId = document.getElementById("meuId")
console.log(elementoPorId)

const elementoPorId2 = document.querySelector("#meuId")
console.log(elementoPorId2)

const elementoPorClasse = document.getElementsByClassName("minhaClasse")
console.log(elementoPorClasse)

const elementoPorClasse2 = document.querySelector(".minhaClasse")
console.log(elementoPorClasse2)

// Manipular conteúdo de texto
const element = document.querySelector("#meuId")
console.log(element.textContent)

setTimeout(() => {
    element.textContent = "Mudei de texto"
}, 1000);

// Trabalhando com atributos
const link = document.querySelector("a")
console.log(link)

link.setAttribute("href", "https://horadecodar.com.br/cursos")

console.log(link.getAttribute("href"))

console.log(link.hasAttribute("target"))

link.removeAttribute("target")

// Manipulação de classes do CSS
const elemento = document.querySelector("#meuId")
element.classList.add("novaClasse")
element.classList.remove("minhaClasse")
element.classList.toggle("outraClasse")
element.classList.toggle("outraClasse")

// Manipular o CSS
const elemento3 = document.querySelector("#meuId")

elemento3.style.color = "blue"
elemento3.style.backgroundColor = "red"

// Navegação entre nós
const element4 = document.querySelector("#meuInput")
const pai = element4.parentNode

console.log(pai)

// Obter o primeiro filho
const primeiroFilho = pai.firstChild
console.log(primeiroFilho)

const ultimoFilho = pai.lastChild
console.log(ultimoFilho)

// Manipulação de estrutura do DOM
const novoElemento = document.createElement("div")
console.log(novoElemento)

novoElemento.textContent = "Minha div de JavaScript"
console.log(novoElemento)

document.body.appendChild(novoElemento)
document.body.insertBefore(novoElemento, pai)
document.body.removeChild(elementoPorId)

// Eventos

// Click
const botao = document.querySelector("button")

botao.addEventListener("click", function() {
    console.log("Botão clicado")
})

// Mouse
const elemento5 = document.querySelector("#botaoEvento")
elemento5.addEventListener("mouseover", function() {
    console.log("O mouse passou aqui!")
})

// Teclado
const campoInput = document.querySelector("#meuInput")
campoInput.addEventListener("keydown", function() {
    console.log("Tecla pressionada")
})

// Formulário
const form = document.querySelector("form")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    console.log("Form enviado")
})

// Propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function() {
    console.log("Click capturado no pai")
})

document.querySelector("#elementoFilho").addEventListener("click", function(event) {
    // event.stopPropagation()

    console.log("Elemento filho")
})

document.querySelector("#meuLink").addEventListener("click", function(event) {
    event.preventDefault

    console.log("Clicou no link")
})

//Delegação de eventos
document.querySelector("#elementoPai").addEventListener("click", function(event) {
    if(event.target.matches(".classeDosFilhos")) {
        console.log("Evento delegado para o filho!")
    }
})