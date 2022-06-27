// Fetch API

const APIKEY = 'YXxPC5WmdWjAFTPZDuXMV1BPb7PmJ8Rv';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`);

// Promesas en cadena, el resultado de la promesa pasa al siguiente then
// No hace falta poner un catch a c/u, el mismo catch cubre todo
peticion
    .then( resp => resp.json() )
    // Utilizamos desestructuracion para no usar data.data en el console.log
    .then( ({data}) => {
        const { url } = data.images.original;
        
        // Dibujar imagen en nuestro html
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    })
    .catch(console.warn);