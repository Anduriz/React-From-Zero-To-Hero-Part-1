// Desestructuracion de arreglos

// Ejemplo 1

const personajes = ['Frodo','Bilbo','Legolas', 'Aragorn', 'Gandalf'];

const [ , , P3 ] = personajes;

console.log( P3 );

// Ejemplo 2

const retornaArreglo = () => {
  return ['ABC',123];
}

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

// Tarea
// 1. El primer valor del arr se llamara nombre
// 2. Se llamara setNombre

const testUseState = ( valor ) => {
  return [valor, () => {console.log('Hola Mundo');}]
}

const [ nombre, setNombre ] = testUseState('Frodo');

setNombre();