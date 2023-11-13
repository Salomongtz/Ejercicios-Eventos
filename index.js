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

botonCalcularIMC.addEventListener("click", (event) => {
    event.preventDefault()
    const resultadoIMC = document.getElementById("resultadoIMC")
    const peso = document.getElementById("peso").value
    const estatura = document.getElementById("estatura").value / 100
    resultadoIMC.value = peso / estatura ** 2
    console.log(resultadoIMC.value)
})

//Ejercicio 4

const botonConvertirDivisa = document.getElementById("botonConvertirDivisa")
const botonReiniciarDivisa = document.getElementById("botonReiniciarDivisa")
const localADolar = document.getElementById("localADolar")
const dolarALocal = document.getElementById("dolarALocal")
const formulario = document.getElementById("convertirDivisa")
const conversion = 4028.65

const valorIngresado = document.getElementById("monedaLocal")
const resultado = document.getElementById("dolares")



localADolar.addEventListener("click", () => {
    formulario.innerHTML = `<label class="font-bold" for="monedaLocal" id="monedaLocalLabel">Moneda local (Peso Colombiano)
    <label class="italic font-normal" for="monedaLocal"><br>sin comas ni puntos</label>
</label>
<input class="text-[#001427] p-2 text-center" type="number" name="monedaLocal" id="moneda">

<label class="font-bold" for="dolares" id="dolaresLabel">Dólares
    <label class="italic font-normal" for="dolares"><br>sin comas ni puntos</label>
</label>
<input class="text-[#001427] p-2 text-center" type="number" name="dolares" id="resultado" readonly>`
})


dolarALocal.addEventListener("click", () => {
    formulario.innerHTML = `<label class="font-bold" for="dolares" id="dolaresLabel">Dólares
    <label class="italic font-normal" for="dolares"><br>sin comas ni puntos</label>
</label>
<input class="text-[#001427] p-2 text-center" type="number" name="dolares" id="moneda">

<label class="font-bold" for="monedaLocal" id="monedaLocalLabel">Moneda local (Peso Colombiano)
    <label class="italic font-normal" for="monedaLocal"><br>sin comas ni puntos</label>
</label>
<input class="text-[#001427] p-2 text-center" type="number" name="monedaLocal" id="resultado" readonly>`
})

botonConvertirDivisa.addEventListener("click", (event) => {
    event.preventDefault()

    const localADolar = document.getElementById("localADolar")
    const dolarALocal = document.getElementById("dolarALocal")
    const conversion = 4028.65

    const resultado = document.getElementById("resultado")
    if (localADolar.checked) {
        monLocal = document.getElementById("moneda").value
        resultado.value = monLocal / conversion
    }
    else if (dolarALocal.checked) {
        dolar = document.getElementById("moneda").value
        resultado.value = dolar * conversion
    }
})


botonReiniciarDivisa.addEventListener("click", (event) => {
    event.preventDefault()
    const valorIngresado = document.getElementById("moneda")
    const resultado = document.getElementById("resultado")
    valorIngresado.value = 0
    resultado.value = 0
})