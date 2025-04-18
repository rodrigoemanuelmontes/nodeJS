
// Clases 
// Javascript es un lenguaje multiparadigma, lo que significa que soporta múltiples 
// metodologías de programación, como la programación imperativa, la funcional o la 
// programación orientada a objetos muy común en lenguajes como Java o C#. 
// La programación orientada a objetos o POO se basa en la creación de Clases que definen 
// propiedades y comportamientos (métodos) de subclases o clases hijas que heredan estas 
// definiciones, de hecho, los objetos funcionales vistos en la sección anterior, son una 
// representación básica de lo que las clases pueden lograr. 

class User {

    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    login(inputEmail, password) {
        return this.email == inputEmail && this.password == password
            ? "Loggin successful!"
            : "Invalid email or password."
    }
}

const user1 = new User("Rodrigo", "rodrigomontes167@gmail.com", "Admin123")

console.log(user1);
console.log(user1.login("rodrigomontes167@gmail.com", "Admin123"));
console.log(user1.login("rodrigomontes167@gmail.com", "Admin1232"));


// Lo interesante de las clases es que pueden extender su estructura a otras clases de la 
// siguiente manera: 

class Seller extends User {
    constructor(name, email, password, store, sells, incomes) {
        super(name, email, password);
        this.store = store;
        this.sells = sells;
        this.incomes = incomes;
    }
    addNewSale(amount) {
        this.sells += 1; // Incrementa el contador de ventas 
        this.incomes += amount; // Agrega el monto al total de ingresos 
        return `Sale added! Total sales: ${this.sells}, 
          Total incomes: ${this.incomes}`;
    }
}




//Utilizando la palabra reservada extends le indicamos a nuestra nueva clase Seller que 
// “herede” todos los métodos y propiedades de User con la posibilidad de agregar nuevos 
// métodos y propiedades únicos para esta clase. Del mismo modo, podemos crear una nueva 
// clase Buyer que siga el mismo procedimiento: 

class Buyer extends User {
    constructor(name, email, password, address, purchases, balance) {
        super(name, email, password);
        this.address = address;
        this.purchases = purchases;
        this.balance = balance;
    }

    makePurchase(amount) {
        if (this.balance >= amount) {
            this.balance -= amount; // Resta el monto del balance 
            this.purchases += 1; // Incrementa el contador de compras 
            return `Purchase successful! Remaining balance:  
               ${this.balance}`;
        } else {
            return "Insufficient balance.";
        }
    }
}

// Una vez que tenemos nuestras clases, podremos crear instancias de cualquiera de ellas: 

const user2 = new User('John', 'j@correo.com', 'jhon123');
const seller1 = new Seller('Juan', 'j@correo.com', 'juan123', 'centro', 2, 0);
const buyer1 = new Buyer('Carito', 'c@correo.com', 'caro123', 'Calle 123', 0, 1100);

console.log(user2)
console.log(seller1)
console.log(buyer1)
console.log(buyer1.makePurchase(500))
console.log(buyer1.makePurchase(600))
//Lo curioso es que tanto Seller como Buyer pueden utilizar el método login 
// perteneciente a User: 

console.log(seller1.login('j@correo.com', 'juan123'));
//pruebo con password distinto
console.log(seller1.login('j@correo.com', 'juan1234'));
console.log(buyer1.login('c@correo.com', 'caro123'));
//pruebo con un mail distinto
console.log(buyer1.login('carito@correo.com', 'caro123'));

// Si bien esta sintaxis puede entenderse lejana de las anteriores el resultado final siguen 
// siendo objetos de Javascript a los que se puede acceder a sus propiedades mediante el 
// uso del . o del [‘propiedad’] tal y como sucede con los objetos literales y los 
// funcionales. 
// Cabe destacar que el paradigma de programación orientada a objetos es un concepto 
// mucho más amplio del abordado en esta sección y posee aún más cosas por conocer. 





//Operadores avanzados.
// Destructuring operator 
// El destructuring permite extraer valores de arrays o propiedades de objetos y asignarlos a 
// variables de manera rápida y sencilla. Esto evita la necesidad de acceder a los valores 
// mediante índices o claves repetidamente. 
// Destructuring en Arrays 
// Se utiliza para desempaquetar valores basados en su posición en el array: 


const numeros = [1, 2, 3];
const [primero, segundo, tercero] = numeros;
console.log(primero);
console.log(segundo);
console.log(tercero);

// En este caso, optamos por nombre aleatorios (primero, segundo y tercero) que en función 
// de cómo fueron ordenados, reclamarán el elemento del array en esa posición.  
// Destructuring en objetos 
// Se utiliza para extraer propiedades de un objeto y asignarlas a variables: 


const persona = {
    nombre: "Ana",
    edad: 25,
};
const { nombre, edad } = persona;

console.log(nombre); // Ana 
console.log(edad); // 25


// A diferencia de los arrays, los nombres que asignamos a las variables deben ser idénticos a 
// los de las propiedades del objeto y no de forma aleatoria. Además, estos pasan a ser 
// nombres de variables en el scope donde son declarados, por lo que no podríamos crear 
// otras variables con el mismo nombre. 

// Otras funciones disponibles mediante el destructuring, son las siguientes: 


/* Utilizar valores predeterminados 
en caso que el objeto no posea esa propiedad */
const { apellido = "No especifcado" } = persona;
console.log(apellido); // No especificado 

/*Renombrar propiedades, en caso que ya exista
una variable con ese nombre */
const { nombre: nombrePersona } = persona;
console.log(nombrePersona); // Ana 




/* Destructuring anidado, para cuando tenemos 
objetos de más de 1 nivel de profundidad */
const usuario = {
    info: {
        nombre: "Luis",
        edad: 30
    }
};
{
    const { info: { nombre, edad } } = usuario;
    console.log(nombre); // Luis 
    console.log(edad);  //30
}




//    Spread operator 


// El spread operator (...) permite expandir arrays u objetos en lugares donde se esperan 
// múltiples elementos, como en argumentos de funciones, creación de nuevos objetos o 
// arrays, y más. 
// Uso en Arrays


/* Combinar 2 o más arrays */
const arrayUno = [1, 2];
const arrayDos = [3, 4];
const arrayCombinado = [...arrayUno, ...arrayDos];
console.log(arrayCombinado); // [1, 2, 3, 4]


/* Clonar o copiar un array */

const arrayOriginal = [1, 2, 3];
const arrayClonado = [...arrayOriginal];
console.log(arrayClonado); // [1, 2, 3]

// Utilizamos los ... para “extraer” el contenido completo de un array y combinarlo con otro o 
// realizar simplemente una copia sin modificar el array original. 

// Uso en Objetos 
// La metodología es bastante similar a los arrays y los resultados también: 

const objetoUno = { a: 1, b: 2 };
const objetoDos = { c: 3, d: 4 };
const objetoCombinado = { ...objetoUno, ...objetoDos };
console.log(objetoCombinado); // { a: 1, b: 2, c: 3, d: 4 }

/* Clonar o copiar un objeto */
const objetoOriginal = { a: 1, b: 2 };
const objetoClonado = { ...objetoOriginal };
console.log(objetoClonado); // { a: 1, b: 2 }


