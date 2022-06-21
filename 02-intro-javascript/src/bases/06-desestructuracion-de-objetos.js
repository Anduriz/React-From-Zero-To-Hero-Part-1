// Desestructuracion
// Asignacion desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

// Extrae de este objeto
// const { nombre } = persona;
// Podemos re nombrar la variable
// const { nombre:nombre2 } = persona;

// console.log( nombre );

const retornaPersona = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
  // console.log( nombre, edad, rango );
  return {
    nombreClave: clave,
    annios: edad,
    lating:{
      lat: 14.2312,
      lng: 12.3121,
    }
  }
}

// Desestructuracion anidadda en lating
const {nombreClave, annios, lating:{lat, lng}} = retornaPersona( persona );
// Otra forma
// const {lat, lng} = lating;

console.log( nombreClave, annios, lat, lng );