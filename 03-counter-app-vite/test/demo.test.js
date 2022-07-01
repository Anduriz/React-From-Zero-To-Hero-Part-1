// Usualmente no se acostumbra a utilizar mas de un describe en un mismo archivo de test,
// pero se puede hacer.

describe('Pruebas en <DemoComponent />', () => { 

    // Sintaxis de una prueba
    // test('Esta prueba no debe de fallar', () => {
    //     if(0 === 0){
    //         throw new Error ('No puede dividir entre cero');
    //     }
    // });

    // Sintavis con JEST

    test('Esta prueba no debe de fallar', () => {
        // 1. Inicializacion
        const message1 =  'Hola Mundo';
        // 2. Estimulo
            // Trim quita los epacios al inicio y al final
        const message2 = message1.trim();
        // 3. Observar el comportamiento
        expect( message1 ).toBe( message2 );
    });

})

