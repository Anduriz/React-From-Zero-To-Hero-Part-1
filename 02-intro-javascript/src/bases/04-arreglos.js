// Arreglos en JS

// Utilizar esta manera solamente cuando quieras utilizar
// un areglo fijo
// const arreglo = new Array();

const arreglo = [1,2,3,4];

// Push modifica el arreglo principal
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [ ...arreglo, 5 ]; 

// Una funcion que se ejecuta dentro de un metodo es
// lamada callbak
const arreglo3 = arreglo2.map( function(numero){
  return numero * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log ( arreglo3 );