// Seleção dos elementos
const display = document.querySelector("#displayInput")
const botaoIgual = document.querySelector(".igual")
const botaoPonto = document.querySelector(".ponto")
const botoesNumeros = document.querySelectorAll(".num")
const botoesOperadores = document.querySelectorAll(".operador")

// Variaveis globais
let operacaoAtual = ""
let operador = null
let valorAnterior = ""
let calculando = false

// Funções
const atualizaDisplay = () => {
    display.value = operacaoAtual
}

const insereNumero = (evento) => {
    if(calculando) {
        operacaoAtual = evento.target.textContent
        calculando = false
    }
    else {
        operacaoAtual += evento.target.textContent
    }

    atualizaDisplay()
}

const inserePonto = (evento) => {
    if(operacaoAtual !== "") {
        if(!calculando) {
            if(operador !== null) calcula()
            valorAnterior = operacaoAtual
            operacaoAtual = ""
        }
        operador = evento.target.textContent
    }
}

function insereOperador(evento) {
    if(operacaoAtual !== "") {
        if(!calculando) {
            if(operador !== null) {
                calcula()
            }
            valorAnterior = operacaoAtual
            operacaoAtual = ""
        }
        operador = evento.target.textContent
    }
}

function calcula() {
    let resultado = null
    const operandoAnterior = parseFloat(valorAnterior)
    const operandoAtual = parseFloat(operacaoAtual)

    switch(operador) {
        case "+":
            resultado = operandoAnterior + operacaoAtual
            break
        case "-":
            resultado = operandoAnterior - operacaoAtual
            break
        case "*":
            resultado = operandoAnterior * operacaoAtual
            break
        case "/":
            resultado = operandoAnterior / operacaoAtual
            break
    }
    operacaoAtual = String(resultado)
    valorAnterior = operacaoAtual
    calculando = true
    atualizaDisplay()
}

// Eventos
botaoPonto.addEventListener("click", inserePonto)
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero))
botoesOperadores.forEach((botao) => botao.addEventListener("click", insereOperador))