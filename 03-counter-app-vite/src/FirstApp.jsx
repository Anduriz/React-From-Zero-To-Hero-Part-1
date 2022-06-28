// import React from 'react'

// Siempre que invocamos elementos de un componente debemos hacerlo dentro de un elemento padre

// // Por medio de Fragment podemos evitar generar un div
// // Existen dos formas de invocarlo

// Ejemplo 1

// import { Fragment } from 'react'

// export const FirstApp = () => {
//   return (
//     <Fragment>
//         <h2>Andy Arellano</h2>
//         <h2>Bienvenido</h2>
//     </Fragment>
//   )
// }

// Ejemplo 2

// const newMessage = 'Andy Arellano';

// export const FirstApp = () => {
//   return (
//     <>
//         <h2>Bienvenido!</h2>
//         {/* Podemos poner cualquier expresion de JS que no sea un objeto */}
//         {/* Debemos tener cuidado porque una promesa es un objeto */}
//         <h2> { newMessage } </h2>
//     </>
//   )
// }

// Para poder imprimir objetos con JSON.stringlify

// const newMessage = {
//     primerNombre: 'Andy',
//     segundoNombre: 'Arellano',
// };

// export const FirstApp = () => {
//   return (
//     <>
//         <h2>Bienvenido!</h2>
//         {/* Podemos poner cualquier expresion de JS que no sea un objeto */}
//         <h2><code> { JSON.stringify(newMessage) } </code></h2>
//     </>
//   )
// }

// Comunicacion entre componentes

// // export const FirstApp = ( props ) => {
// export const FirstApp = ( { title, subTitle } ) => {

//     return (
//     <>
//         <h2>Andy Arellano</h2>
//         {/* <h2> { props.title } </h2> */}
//         <h2> { title } {subTitle} </h2>
//     </>
//   )
// }

// Proptypes
// import PropTypes, { string } from 'prop-types';

// export const FirstApp = ( { title, subTitle } ) => {

//     return (
//     <>
//         <h2>Andy Arellano</h2>
//         {/* <h2> { props.title } </h2> */}
//         <h2> { title } {subTitle} </h2>
//     </>
//   )
// }

// FirstApp.propTypes = {
//     title: PropTypes.string.isRequired,
//     subTitle: PropTypes.string.isRequired
// }

// Default Proptypes

import PropTypes, { string } from 'prop-types';

export const FirstApp = ( { title, subTitle } ) => {

    return (
    <>
        <h2>Andy Arellano</h2>
        {/* <h2> { props.title } </h2> */}
        <h2> { title } {subTitle} </h2>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'Andy Arellano',
    subTitle: 'No hay subtitulo',
    title: 'No hay titulo',
}