import { getImagen } from "../../../src/base-pruebas/base-pruebas/11-async-await"

describe('Pruebas en 13-Adync-Await.js', () => { 
    test('getImagen debe de retornar un URL de la imagen', async() => { 
        const url = await getImagen();
        console.log(url);
     })
 })