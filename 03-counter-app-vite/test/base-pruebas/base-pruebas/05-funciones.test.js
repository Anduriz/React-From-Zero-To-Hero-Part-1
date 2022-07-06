import { getUser, getUsuarioActivo } from "../../../src/base-pruebas/base-pruebas/05-funciones";


describe('Pruebas en 05-Funciones', () => { 
    
    test('getUser debe retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        console.log(user);

        //ToBe es diferente a toEqual
        expect( testUser ).toEqual( user );

    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const name = 'Andy';

        const user = getUsuarioActivo( name );

        expect( user ).toEqual( {
            uid: 'ABC567',
            username: name
        } );

    });


 });