/* //ejercicio 1
const nombre = prompt("Ingrese su nombre:");
const edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
alert(`${nombre}, puedes ingresar a la discoteca.`);
} else {
alert(`${nombre}, no puedes ingresar a la discoteca.`);
}

// Verificar ingreso a VIP
if (nombre === "Mario" || nombre === "Carlos") {
alert(`${nombre}, tienes acceso a la zona VIP.`);
} */

//ejercicio 2
const estatura = parseFloat(prompt("Ingrese su estatura en cm (ej: 170):"));

const velocidad = parseFloat(prompt("Ingrese su velocidad en km/h (ej: 27):"));

const edadEquipo = parseInt(prompt("Ingrese su edad para el equipo:"));



if (estatura >= 170 && velocidad >= 27) {

    alert("Cumples con los requisitos físicos para ingresar al equipo.");



    if (edadEquipo < 18) {

        alert("Serás asignado a las divisiones menores.");

    } else {

        alert("Serás asignado al equipo profesional.");

    }

} else {

    alert("No cumples con los requisitos para ingresar al equipo.");

}