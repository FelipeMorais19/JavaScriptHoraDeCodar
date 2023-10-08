// Exercicío 01 - Olá, Mundo!
// Criar um script que imprima "Olá, Mundo!" no console.

console.log("Olá, Mundo!")


// Exercicío 02 - Conversão de tipos
// Dado o valor "1234", converta-o em um número e exiba o tipo da variavel no console.

const valor = "1234"
valorConvertido = Number(valor)

console.log(valor)
console.log(typeof valorConvertido)


// Exercicío 03 - Manipulação de strings
// Dado uma string "JavaScript é incrível", escreva quantos caracteres a string tem e quantas palavras existem na frase

const frase = "JavaScript é incrível"
numeroCaracteres = frase.length
const numeroPalavras = frase.split(" ").length

console.log(`O número de caracteres são: ${numeroCaracteres}`)
console.log(`O número de palavras são: ${numeroPalavras}`)


// Exercicío 04 - Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console

const nome = ["Ana", "Bia", "Carol", "Duda", "Fernanda"]

for(let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}


// Exercicío 05 - Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

function converterHorario(horario24) {
    const [hora, minuto] = horario24.split(":")
    // const hora = horario24.split(":")[0]
    // const minuto = horario24.split(":")[1]

    const hora12 = hora % 12 || 12 

    let periodo = "AM"

    if(hora > 12) {
        periodo = "PM"
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHorario("15:16")

converterHorario("09:46")

converterHorario("21:12")