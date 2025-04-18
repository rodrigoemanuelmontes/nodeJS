//En JS existe un tipo de dato llamado Object del cual se desprenden los objetos
//Se trata de una estructura que permite crear colecciones de datos 
//que tienen sentido en conjunto pero que a diferencia de los arrays que se ordenan mediante 
//un índice, en los objetos, cada propiedad o elemento es un par clave/valor separado de 
//otro a través de una coma. 
const hero = {
    alias:'Cody',
    universe: 'TechLab',
    powers: ['fly', 'nightvision','stregth'],
    hit:128,
    vitality: 100,
    decreaseVitality: function(damage){
        return this.vitality - damage
    }
}

//Caracteristicas de los objetos.


//Pares clave/valor: Cada dato en un objeto está asociado a una clave única a la que se la conoce
//como propiedad. Normalmente se dice que un objeto está compuesto por propiedades.
const student1 ={
    name:'Juan',
    age:30,
    active: true
};
console.log(student1)


//Dinamismo: Los obj puden expandirse o modificarse en tiempo de ejecución, añadiendo, eliminando o
//actualizando propiedades. A diferencia de las variables un objeto puede guardar una propiedad que antes no existía
const student2 ={
    name:'Juan 2',
    age:30,
    active: true
};
student2.adress = 'Calle Falsa 123';
console.log(student2)


//Métodos: Aparte de almacenar datos un obj puede incluir funciones como valor de sus propiedades(Métodos)
const calculator = {
    addition: (a, b)=> a + b,
    subtrac: (a, b)=> a - b
};
console.log(calculator.addition(5,3))
console.log(calculator.subtrac(5,3))



//Objetos Literales.

//Los literales de los objetos en Javascript son las llaves {}. Declarar un objeto asignando a 
// una variable un par de llaves que contenga propiedades es la manera más sencilla y 
// tradicional de hacerlo. 
// Las propiedades son cada clave del objeto a las que se le asigna un valor. Ese valor puede 
// ser de cualquier tipo de dato, incluso una función. 
// A continuación vemos un ejemplo de objeto con propiedades y valores: 

const user = {
    name:'Jhon',
    lastName: 'Doe',
    age: 27,
    adress: 'Fake street 123',
    isMarried: false,
    sayHi: ()=> console.log('Hi there, buddy')
}
console.log(user)
user.sayHi()

//Aplico dinamismo para agregar propiedades al obj user
user.hobbies='Programing';
console.log(user)


//otra forma de llamar a las propiedades
console.log(user['age']);





// //Objetos funcionales

//Un objeto funcional en JavaScript es una forma de crear objetos utilizando una función 
// constructora. Este patrón, común antes de la introducción de las clases en ES6, permite 
// definir un \molde\ para crear múltiples objetos con la misma estructura y comportamiento. 
//La función constructora actúa como una plantilla que puede inicializar las propiedades y 
//métodos de cada instancia del objeto. 

function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHi= function (){
        console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.` )
    }
}

//Instancio y muestro los ambos objetos:
const person1 = new Person ('Juan', 27);

const person2 = new Person ('María', 30);

console.log(person1);
person1.sayHi();

console.log(person2);
person2.sayHi();



