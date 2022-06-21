//Template Strings

const NOMBRE = "Andy";
const APELLIDO = "Arellano";

// const nombreCompleto = NOMBRE + ' ' + APELLIDO;
const nombreCompleto = `Bienvenido ${ NOMBRE } ${ APELLIDO }`;

console.log( nombreCompleto );