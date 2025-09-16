const titulo = document.getElementById("titulo");
const imagen = document.getElementById("imagen");
const miniaturas = document.getElementsByClassName("miniatura");

console.log(titulo)
console.log(imagen)
console.log(miniaturas)

function cambiarImagen(event) {
    console.log(event.target.src)
    titulo.textContent = event.target.name;
    imagen.src = event.target.src;
    document.body.style.backgroundImage = `url(${event.target.src})`;
}

Array.from(miniaturas).forEach(element => {
    element.addEventListener("click", cambiarImagen);

});

