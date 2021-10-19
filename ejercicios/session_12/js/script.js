// const person = {
//     name = 'fego',
//     apellido: ''
// };

// console.log(prsn)

// const nmbr = [1,2,3]
// nmbr [1];

// console.log(number)

// const test = new String('este es un string')
// console.log(test)

//functional functions

function Persona (name, lastName) {
    this.name = name
    this.lastName = lastName;
    this.saludar = () => {
        console.log(`hola ${this.name}`)
    }
};

const otra = () => {
    console.log(this);
};

console.log(otra())

//con la palabra reservada "new" se convierte en funcion constructora
const person1 = new Persona('EDDIE', 'BROOK')

const person2 = new Persona('clestus', 'casady')
//añadir metodos señalando la funcion constructora para crear un metodo
Persona.prototype.saludar = function () {
    console.log
}
//this cambia de valor dependiendo en donde se encuentre escrito