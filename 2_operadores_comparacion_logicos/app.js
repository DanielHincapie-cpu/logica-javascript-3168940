//Boolean(...)

console.log( ' "5" == "5" ', "5" == "5" ) //true
console.log( ' "5" === "5" ', "5" === "5" ) //true
console.log( ' 5 === "5" ', 5 == "5" ) //false
console.log( ' 5 == "5" ', 5 == "5" ) //true
console.log( ' 5 == (3+2) ', "5" == (3+2) ) //false 
console.log( ' 5 == 5 ', 5 == 5 ) //true

//pida dos numeros al usuario y sumelos
//let num1 = Number (prompt('Dame num 1')) //"5"
//let num2 = Number (prompt('Dame num 2')) //"3"
//let resultado = num1 + num2
//alert("el resultado de su suma es " + resultado)

let num1 = prompt("ingrese el primer numero(x):");
let num2 = prompt("ingrese el segundo numero(y):");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

console.log("el valos x es = " + num1 + " y el valor y es = " + num2)

console.log("la suma de " + num1 + " + " + num2 + " = " + (num1 + num2));
console.log("la resta de " + num1 + " - " + num2 + " = " + (num1 - num2));
console.log("la multiplicacion de " + num1 + " * " + num2 + " = " + (num1 * num2));
console.log("la division de " + num1 + " / " + num2 + " = " + (num1 / num2));


let sumaMultiplicada = (num1 + num2) *10;
console.log ("la suma de " + num1 + " + " + num2 + " multiplicado * 10 = " + sumaMultiplicada)