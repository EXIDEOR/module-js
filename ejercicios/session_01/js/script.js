//nombrando variables
var primero = 'escope global'
//cada variable tiene un valor (texto en azul claro)
//cada valor de la variable tiene un string básico ('')
var scope = 'scope de bloque'

//metodo de consola que permite ver en consola el contenido del codigo en javscript
//aqui console.log muestra el valor string de la variable "primero" en consola (la consola es la herramienta de desarrollador en el navegador web)

//el {console.log} es un objeto
//un texto.valor también es un objeto
{
    console.log(primero, 'primis')
}
// let perro = {} es una variable (let perro ) que está declarando un objeto ={}
//si la variable empieza con [] indica que ese objeto está conformado por arreglos (arrays) marcados con {} y , 
let perros = [{
//nombre es el keyword o la propiedad del objeto
//'chon' es el valor asignado a esa propiedad
//el objeto en este ejercicio es perro y tiene 2 arrays dentro el 0 que es chon y el 1 que es bona
    nombre: 'chon',
    raza: 'callejero',
},
{
    nombre: 'bona',
    raza: 'callejero',
    apodos: ['apodo2',3]
},
]
//Este console log ACCEDE a la propiedad del objeto perro y en consola imprime el valor de la propiedad
//console.log(perros[1])accede al arreglo del objeto, el [1] indica que debe mostrarse la segunda propiedad del arreglo porque comienza a contar desde el 0
console.log(perros[1])
console.log(perros)

//formas de declarar variables:
//var es la forma global no recomendable usar
var nombre = 'Selena'
//let es variable declarada 
let nombreConLet = 'YOLANDA SALDIVAR'

function test () {

}
test()
const miFuncion = function (num1, num2=2) {
    console.log(num1)
    console.log(num2)
    return num1 + num2;
}
console.log(miFuncion(1))
console.log('-------operadores')

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
