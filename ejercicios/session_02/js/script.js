
// asignacion
// = -> asignacion
// += -> asginacion con adicion
// -= asignacion con sustraccion
// *=
// /=
// %=
// logicos
// comparacion
// //

/*operadores de comparación:

== comparación
=== extrema comparación
!= diferente
!== extremadamente diferente
> mayor que 
< menor que
>= mayor o igual que
<= menor o igual que
*/

const division = 5 / 2;
const resultado = 10 % 2 ;
//el console log muestra 0 porque % muestra el residuo de la división que es 0
console.log(division)
console.log(resultado)

// const test = 5 +(5 - 10) * 3;
// console.log(test)

const nombre = 'Yisu'
const apellido = 'Krais'
console.log('io soe' + nombre + apellido)
console.log(`io soe ${nombre} ${apellido}`)

// Relacionales /comparacion
// >
// <
// >=
// <=
// ==
// === 
// !=
// !==

let number = 9
console.log(++number)
//resultados de comparacion con booleanos
// console.log( 5 > 4)
// console.log('7' == 7)
// console.log(3 === '6')
//bango es numero en japones
let bango = 3;
//asignacion de valor aritmetico * (mutiplicacion) + variable asignada
//quiere decir: mostar en pantalla la variable (* , / , -) del valor nuevo asignado (3)
bango = bango * 3
//diferente sintaxis del incremento por * entre la variable y el valor agregado por operaciones aritmetcias
bango *= 3
//primero hace la op *
bango /= 2
//el resultado de la * lo resuelve con la nueva operación /
bango -= 12
//el resultado de la / lo resuelve con la nueva operación -
//muestra el resultado final después de realizar todas las operaciones
console.log(bango)
//añadir doble signo ++ añade una adicion al valor de la variable inical y muestra el resultado en pantalla
//tambien puede hacerse por sustraccion -- y resta 1 al resultado a mostrar en pantalla
//no se puede con * o / 
console.log(bango)


// Logico

// && And -> Se deben de cumplir todas que sean declaradas
// || or -> Con que se cumpla una de las condiciones  
// ! Not

// muestran resultados booleanos

const age = 19;
const viejo = age >= 20;

if(viejo) {
    console.log('anciano')
}

if(!viejo) {
    console.log('ta chavo')
}

if(age > 18 && age >= 21) {
    console.log('entra')
}else if (age > 18 && age < 21){
    console.log('castigado')
}else {
    console.log('vete niño')
}

//('---------------- estructura if')
if(!'') {
    console.log('F')
}
if(1) {
    console.log('V')
}
//('---------------- estructura switch');

// doomingo < - 0
// lunes <- 1

const currentDay = 3

switch (currentDay) {
    case 0: 
    console.log('es dormingo')
        break;
    case 1:
        console.log('lunes')
        break;
    case 2:
        console.log('martes')
        break;
    default:
        console.log('hoy no')
        break;
}

if(currentDay === 1) {
    console.log('lunes')
} else if (currentDay === 2) {
    console.log('martes')
} else {
    console.log('que hoy no')
}

const toshi = 144
//  Operador ternario estructura:
//[condicion a evaluar] ? -> (si se cumple) [valor a agregar] : [segundo valor a agregar]
//si es verdadero toma el primer valor, y si no, toma el segundo valor
const result = toshi > 18 ? 'viejo' : 'shavo'
console.log(result)

// 1. Pedir al usuario por prompt un numero entre 1 y 100
//    - Verificar si es un par o impar e imprimir en resultado en consola
function typeUrAge(toshi){
    toshi = prompt(¨¨)
    const result = toshi > 18 ? 'viejo' : 'shavo'
}return result

// 2. Pedir al usuario 2 numeros
//    - Imprimir en consola cual es el menor de los 2
//    - Imprimir en consola cual es el mayor de los 2
   
// 3. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
//    - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola

// 4. Pedir al usuario la calificación de un examen ( 0 a 100) por el prompt:
//    -Imprimir en consola las equivalencias en letra su calificación, es decir:
   
// si es mayor o igual a 90, imprimir "A"

// si es mayor o igual a 80 y menor que 90 , imprimir "B"
   
// si es mayor o igual a 70 y menor que 80 , imprimir "C"
   
// si es mayor o igual a 60 y menor que 70 , imprimir "D"
   
// si es mayor o igual a 50 y menor que 60 , imprimir "E"
   
// si es menor 50 , imprimir "F"
