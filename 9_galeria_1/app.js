const contenedor = document.getElementById("contenedor");
const Titulo = document.querySelector(".titulo");
const btnSiguiente = document.querySelector(".btn-siguiente");
const btnAnterior = document.querySelector(".btn-anterior");

let indice = 0;
const totalImagenes = contenedor.children.length;

btnSiguiente.addEventListener("click", () => {
    indice++;
    if (indice >= totalImagenes) {
        indice = 0;
    }
    actualizarGaleria();
});

btnAnterior.addEventListener("click", () => {
    indice--;
    if (indice < 0) {
        indice = totalImagenes - 1;
    }
    actualizarGaleria();
});

function actualizarGaleria() {
    const desplazamiento = -indice * 400; 
    contenedor.style.transform = `translateX(${desplazamiento}px)`;
    Titulo.textContent = `Imagen ${indice + 1}`;
}
actualizarGaleria();