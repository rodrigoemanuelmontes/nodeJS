const nombres = ["juan", "Maria", "Pedro", "Juana"];

nombres.forEach((item) => console.log(item));

//Array join(Une los elementos del array sepadaros)
const listaNombres = nombres.join();
console.log(listaNombres);


//Array filter(Filtra el array y devuelve un valor)
const arrayFilter = nombres.filter((nombre) => nombre > "M");
console.log(arrayFilter, nombres);





//For of filtrado
for (const element of nombres) {
  if (element > "M") {
    console.log(element)
  }

}



//Ejercicio clase nro 3
console.log("Ejercicio clase nro 3");
const precios = [100, 45, 89, 78, 12.99];

//por cada precio, se ejecuta una función flecha.
const preciosConIVA = precios.map((precio) => {
  //Calcula el precio con IVA incluido, asumiendo que el IVA es del 21% (por eso se multiplica por 1.21).
  //Luego, usa .toFixed(2) para redondear el resultado a dos decimales (como un precio real).
  //Number(...) convierte ese número redondeado (que por .toFixed() es un string) de vuelta a número.
  const conIVA = Number((precio * 1.21).toFixed(2));
  //Devuelve una cadena de texto interpolada (template literal) que muestra tanto
  //el precio original como el precio con IVA.
  return `El precio es: $${precio} - IVA incluido: $${conIVA}`;
});

console.log(preciosConIVA);
