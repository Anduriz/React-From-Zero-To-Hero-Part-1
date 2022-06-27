// Async & Await

const getImagen = async() => {

    // Manejo de los erroes dentro de Async por medio de try/catch
    try{
        const APIKEY = 'YXxPC5WmdWjAFTPZDuXMV1BPb7PmJ8Rv';
        // Await espera a que la promesa teminer antes de ejecutar la sig linea de codigo
        // La unica condicion para trabajar con Await es que debe estar dentro de una funcion Async
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`);
        const { data } = await resp.json();
        console.log(data);
        
        const {url} = data.images.original;

        // Dibujar imagen en nuestro html
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error){
        // Manejo del error
        console.error(error);
    }

}

getImagen();

// // Fetch API

// const APIKEY = 'YXxPC5WmdWjAFTPZDuXMV1BPb7PmJ8Rv';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`);

// // Promesas en cadena, el resultado de la promesa pasa al siguiente then
// // No hace falta poner un catch a c/u, el mismo catch cubre todo
// peticion
//     .then( resp => resp.json() )
//     // Utilizamos desestructuracion para no usar data.data en el console.log
//     .then( ({data}) => {
//         const { url } = data.images.original;
        
//         // Dibujar imagen en nuestro html
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);

//     })
//     .catch(console.warn);