// Promesas

import { getHeroesById } from "./bases/08-imp-exp-copy";

// Las promesas por naturaleza son asincronas, 
// primero se ejecutara el codigo sincrono de JS

// Resolve se ejecuta cuando la promesa es exitosa
// Reject se ejecuta cuando la promesa falla

// const promesa = new Promise( ( resolve, reject ) => {

//     setTimeout(() => {
//         // Importar funciones getHeroesById
//         const heroe = getHeroesById(1);
//         resolve( heroe );
//         // reject('No se pudo encontrar el heroe.');
//         // 2 Segundos despues 
//     }, 2000)

// });

// // Then la promesa se ejecuto correctamnte
// // Catch la promsa dio un error
// // Finally se ejecuta luego del then y el catch

// promesa.then( (heroe) => {
//     console.log('Heroe', heroe);
// })
// .catch( err => console.warn( err ));

const getHeroesByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            // Importar funciones getHeroesById
            const heroe = getHeroesById( id );
            if( heroe ){
                resolve( heroe );
            } else {
                reject('No se pudo encontrar el heroe.');
            }
            // 2 Segundos despues 
        }, 2000)
    });
}

getHeroesByIdAsync(1)
    // .then( heroe => console.log('Heroe',heroe))
    .then( console.log )
    // .catch( err => console.warn( err ))
    .catch( console.warn )