//Ejericicio 1

const cuadradoColor = document.getElementById("cuadradoColor")
const botonCambiarColor = document.getElementById("cambiarColor")
const tituloCuadrado = document.querySelector("span.tituloCuadrado")
console.log(tituloCuadrado)
botonCambiarColor.addEventListener("click", (event) => {
    event.preventDefault()
    if (cuadradoColor.classList.contains("bg-[#708d81]")) {
        cuadradoColor.classList.replace("bg-[#708d81]", "bg-[#001427]")
        tituloCuadrado.textContent = "Azul"
    } else if (cuadradoColor.classList.contains("bg-[#001427]")) {
        cuadradoColor.classList.replace("bg-[#001427]", "bg-[#bf0603]")
        tituloCuadrado.textContent = "Rojo"
    } else if (cuadradoColor.classList.contains("bg-[#bf0603]")) {
        cuadradoColor.classList.replace("bg-[#bf0603]", "bg-[#708d81]")
        tituloCuadrado.textContent = "Gris"
    }
})

//Ejercicio 2

const cuadradoTexto = document.getElementById("cuadradoTexto")
const textoIngresado = document.getElementById("textoIngresado")
const textoCuadrado = document.getElementById("textoCuadrado")
const botonReiniciarTexto = document.getElementById("reiniciarTexto")

textoIngresado.addEventListener("input", () => {
    textoCuadrado.textContent = textoIngresado.value
})

botonReiniciarTexto.addEventListener("click", (event) => {
    event.preventDefault()
    textoCuadrado.textContent = ""
    textoIngresado.value = ""
})

//Ejercicio 3

const botonCalcularIMC = document.getElementById("botonCalcularIMC")
const resultadoIMC = document.getElementById("resultadoIMC")
let peso, estatura

botonCalcularIMC.addEventListener("click", (event) => {
    event.preventDefault()
    peso = document.getElementById("peso").value / 10
    estatura = document.getElementById("estatura").value
    resultadoIMC.value = peso / estatura ** 2
    console.log(resultadoIMC.value)
})

//Ejercicio 4