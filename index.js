// 2. Funciones
import operaciones from './operaciones.js'

// 1. VARIABLES

const nombre        = document.querySelector("#capturar-nombre")
const btnSaludar    = document.getElementById("btn-saludar")
const areaSaludo    = document.getElementById("area-saludo")

const valorA        = document.getElementById("valor-a")
const valorB        = document.getElementById("valor-b")
const btnSumar      = document.getElementById("btn-sumar")
const areaSuma      = document.getElementById("area-suma")

const question      = document.getElementById("question")

// 3. EVENTOS
btnSaludar.addEventListener("click", () => {

    const nameValue = nombre.value

    const resultado = operaciones.saludar(nameValue)

    areaSaludo.innerHTML = resultado

    
})

btnSumar.addEventListener("click", () => {

    const inputValorA   = parseInt(valorA.value)
    const inputValorB   = parseInt(valorB.value)

    const resultado = operaciones.sumar(inputValorA, inputValorB)

    areaSuma.innerHTML = resultado

})

window.addEventListener("load", () => {
    console.log("hola")
})



// Manipulando estilos
question.style.color = "blue"

let mice = document.getElementsByClassName("mouse")

for(let i=0; i<mice.length; i++){
    mice[i].style.color = "green"
}

mice[0].addEventListener("mouseover", () => {
    console.log(mice)
    mice[0].style.fontSize = "50px"
})

let divs = document.getElementsByTagName("div")

console.log("divs:", divs)

mice[0].className = "mouse whiteMouse"

// Acceder al id de alguna etiqueta
console.log(btnSaludar.id)


let parrafo = document.getElementById("info-parrafo")

console.log(parrafo)

parrafo.setAttribute('class', 'subrayado')
valorA.setAttribute('placeholder', 'Escribe el primer número')

parrafo.removeAttribute('class')


let h2Etiqueta = document.createElement("h2")
console.log(h2Etiqueta)

let parent  = document.getElementById("main")
console.log(parent)

h2Etiqueta.innerHTML = "Soy la etiqueta que estaban esperando creada"

parent.appendChild(h2Etiqueta)

const deleteP = document.getElementById("delete-p")

parent.removeChild(deleteP)