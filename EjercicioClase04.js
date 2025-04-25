
//--------------------------EJERCICIO CLASE 4-----------------------------//
// Misión 1: 
// 1.  Crea un array con 10 objetos, donde cada objeto represente un automóvil con la 
// siguiente información: 
// ○  Marca 
// ○  Modelo 
// ○  Año 
// ○  Color

// 2.Usa un método de array para recorrer la lista e imprime por consola todos los datos 
// de los automóviles cuyo año sea mayor a 2018. 
// Matías añade: “Queremos que veas esto como un ejercicio para prepararte para trabajar 
// con datos reales en el futuro”. 

// Ejercicio 2 - Análisis de Colores: 
// Impresionados con tu avance, Matías y Sabrina suben un poco la dificultad. Sabrina te 
// plantea:  

// “Queremos saber si puedes analizar la información de forma específica. 
// Aquí tienes tu próximo desafío”. 


// Misión 2: 
// 1.  Crea una función que recorra el array de automóviles. 
// 2.  Usa destructuring dentro de la función para obtener el color de cada automóvil. 
// 3.  La función debe aceptar un color como parámetro y devolver por consola cuántos 
// automóviles tienen ese color. 
// “Este tipo de habilidad es esencial para manejar sistemas dinámicos”, explica Matías. 
// ¿Estás listo para superar esta prueba y demostrar tu capacidad para manipular datos con 
// precisión? ¡Adelante! 

const automóviles = [
  {
    Marca: 'Toyota',
    Modelo: 'Corolla',
    Año: 2007,
    Color: 'Plateado'
  },
  {
    Marca: 'Ford',
    Modelo: 'Focus',
    Año: 2012,
    Color: 'Negro'
  },
  {
    Marca: 'Chevrolet',
    Modelo: 'Cruze',
    Año: 2015,
    Color: 'Blanco'
  },
  {
    Marca: 'Honda',
    Modelo: 'Civic',
    Año: 2018,
    Color: 'Rojo'
  },
  {
    Marca: 'Volkswagen',
    Modelo: 'Golf',
    Año: 2020,
    Color: 'Gris'
  },
  {
    Marca: 'Nissan',
    Modelo: 'Sentra',
    Año: 2019,
    Color: 'Azul'
  },
  {
    Marca: 'Hyundai',
    Modelo: 'Elantra',
    Año: 2021,
    Color: 'Verde'
  },
  {
    Marca: 'Kia',
    Modelo: 'Rio',
    Año: 2016,
    Color: 'Negro'
  },
  {
    Marca: 'Peugeot',
    Modelo: '208',
    Año: 2022,
    Color: 'Gris oscuro'
  },
  {
    Marca: 'Renault',
    Modelo: 'Logan',
    Año: 2014,
    Color: 'Bordó'
  }
];

// Crea una nueva lista llamada 'autosRecientes'
// Filtra los elementos del array 'automóviles'
// Solo incluye los autos cuyo año ('Año') sea mayor a 2018

const autosRecientes = automóviles.filter(auto => auto.Año > 2018);

// Recorre cada auto dentro de la lista 'autosRecientes'
// Para cada auto, imprime sus propiedades: Marca, Modelo, Año y Color

autosRecientes.forEach(auto => {
  console.log(`Marca: ${auto.Marca}, Modelo: ${auto.Modelo}, Año: ${auto.Año}, Color: ${auto.Color}`);
});

// Define una función llamada 'contarAutosPorColor'
// Toma dos parámetros:
// - 'automoviles': el array de autos donde buscar
// - 'colorBuscado': el color que se quiere contar

function contarAutosPorColor(automoviles, colorBuscado) {

  // Inicializa una variable 'contador' en 0
  // Se usará para contar cuántos autos coinciden con el color buscado

  let contador = 0;

  // Recorre cada auto del array 'automoviles'
// Usa destructuring para obtener solo la propiedad 'Color' de cada auto
// establece una condición que si Color es igual al color buscado se incrementa el contador
  automoviles.forEach(auto => {
    const { Color } = auto; 

    if (Color.toLowerCase() === colorBuscado.toLowerCase()) {
      contador++;
    }
  });

  console.log(`Hay ${contador} automóvil(es) de color ${colorBuscado}.`);
}


contarAutosPorColor(automóviles, "Negro");      // Debería decir: Hay 2 automóvil(es) de color Negro.
contarAutosPorColor(automóviles, "Rojo");       // Hay 1 automóvil(es) de color Rojo.
contarAutosPorColor(automóviles, "Gris");       // Hay 1 automóvil(es) de color Gris.
contarAutosPorColor(automóviles, "Verde");      // Hay 1 automóvil(es) de color Verde.
contarAutosPorColor(automóviles, "Violeta");    // Hay 0 automovil(es) de color Violeta.

// 1.  ¿Cuándo es más útil utilizar objetos literales frente a clases o funciones 
// constructoras? 
// 2.  ¿Qué ventajas ofrece el destructuring en la simplificación de código? 
// 3.  ¿En qué situaciones puede ser útil combinar objetos y arrays con el spread 
// operator? 

// Objetos literales son más útiles cuando:

// Necesitás crear una única instancia de un objeto.

// No necesitás reutilizar la estructura o comportamiento en múltiples lugares.

// Estás trabajando con datos simples o estáticos.

// Querés representar algo sin lógica compleja (como configuraciones, datos JSON, etc.).

//  Ejemplo:

const config = {
  apiKey: '123abc',
  mode: 'dev',
  debug: true
};
// ✅ Útil para: Configuración, respuestas de APIs, datos de prueba, etc.

// Clases o funciones constructoras son preferibles cuando:

// Necesitás crear múltiples objetos con la misma estructura o comportamiento.

// Vas a usar métodos compartidos entre instancias.

// Trabajás con lógica más compleja, herencia, o estructuras orientadas a objetos.

// 🔧 Ejemplo:


class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}
//  Útil para: Modelos de usuarios, productos, clases de negocio, etc.

//  2. ¿Qué ventajas ofrece el destructuring en la simplificación de código?
// Destructuring ayuda a escribir código más limpio, legible y conciso. Entre sus ventajas:

// Acceso directo a propiedades o elementos sin escribir repeticiones:
const persona2 = { nombre2: "Ana", edad2: 25 };
const { nombre2, edad2 } = persona2;
// En vez de: persona.nombre, persona.edad

// Evita líneas innecesarias y hace que el código sea más expresivo.

//  Funciona bien con funciones:

function saludar({ nombre }) {
  console.log(`Hola, ${nombre}`);
}
console.log(persona2);

// Se puede usar en arrays, objetos, parámetros, valores por defecto, renombrado, y destructuring anidado.

//  3. ¿En qué situaciones puede ser útil combinar objetos y arrays con el spread operator?
// El spread operator (...) es súper útil en casos como:

// Copiar arrays u objetos sin afectar el original (inmutabilidad):

const original = [1, 2, 3];
const copia = [...original];

console.log (original, copia);

// Fusionar arrays u objetos:

const a = [1, 2];
const b = [3, 4];
const combinado = [...a, ...b]; // [1,2,3,4]
console.log(a, b, combinado);

const obj1 = { x: 1 };
const obj2 = { y: 2 };
const combinadoObj = { ...obj1, ...obj2 }; // {x: 1, y: 2}
console.log (obj1,obj2,combinadoObj);


// Agregar elementos a arrays sin usar .push() (inmutable):
const lista = [1, 2];
const nuevaLista = [...lista, 3]; // [1, 2, 3]
console.log(lista, nuevaLista)


// Actualizar un objeto sin mutarlo:

const usuario = { nombre: 'Ana', edad: 25 };
const actualizado = { ...usuario, edad: 26 }; // sin modificar el original
console.log(usuario, actualizado);

