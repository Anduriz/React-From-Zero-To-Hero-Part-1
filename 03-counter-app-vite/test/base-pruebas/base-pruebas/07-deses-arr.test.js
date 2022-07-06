import { retornaArreglo } from "../../../src/base-pruebas/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 

    test('Debe retornar un string y un numero', () => {

        // Valor de retorno
        const [ letters, numbers ] = retornaArreglo();

        // Aserciones
        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

        // Expect tipo string & numbers

        // console.log( typeof letters);

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        // Expect tipo string pero es mas flexible
        expect( letters ).toEqual( expect.any(String) );

    })

 })