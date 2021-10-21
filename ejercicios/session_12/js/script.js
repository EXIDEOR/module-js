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

//ejercicios//

// const person = {
//   name:'ivan',
//   paellisdo:'',
//   saludar: function (params) {

//   }
// };

// console.log(person.saludar())

// const number = [1,2,3]
// number[1]

// console.log(number)

// const test = new String('este es un string')
// console.log(test)

function Persona(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  
  // const otra = () => {
  //   console.log(this);
  // };
  
  // console.log(otra())
  
  const person1 = new Persona('ivan', 'diaz')
  
  const person2 = new Persona("German", "Martinez");
  
  Persona.prototype.saludar = function() {
    console.log(`hola soy ${this.name}`);
  };
  // console.log(person1)
  console.log([person1, person2]);
  
  
  
  const koders = [
    {
      name: "Harold",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 80
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
  
    {
      name: "Arnold",
      lastName: "Osborn",
      birthday: "1998/05/12",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    },
    {
      name: "Peter",
      lastName: "Parker",
      birthday: "1994/10/26",
      generation: 10,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 100
        },
        {
          module: "Backend",
          score: 95
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Homer",
      lastName: "Simpson",
      birthday: "1996/06/24",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 98
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 70
        }
      ]
    },
    {
      name: "Ren",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 80
        },
        {
          module: "Backend",
          score: 90
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    }
  ];
  console.log(koders)
  
  /*
  Ejercicio en clase:
  Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
  Prototipo de tipo koder
  Obtener la edad a partir de la fecha de nacimiento
  Obtener promedio de sus scores
  ---
  Colección de Koder que pertenezcan a JavaScript
  Colección de Koder que pertenezcan a Python
  {
    kavascrip: [
      koder1
    ],
    python: [
      
    ]
  }
  */ 

  const currentYear = new Date().getFullYear()

  const getAge = (birthday, currentYear) => {
      return currentYear = birthday
  }

  const objectBirthday = koders.forEach((koder)=>{
      const koderBirthday = (koder.birthday.slice(0.5))
      console.log(koder.birthday)
      console.log(koderBirthday)

      console.log(getAge(getAge(koderBirthday, currentYear)))
  });

  function koder (name, lastName, age, generation, bootcamp, promedio) {
      this.name = name
      this.lastName = lastName
      this.age = age
      this.generation = generation
      this.bootcamp = bootcamp
      this.promedio = promedio      
  }

  new koder ()

  koders.map((koder=>{
      return new koder(k)
  }))

