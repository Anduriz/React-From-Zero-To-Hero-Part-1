import { getHeroeById, getHeroesByOwner } from "../../../src/base-pruebas/base-pruebas/08-imp-exp";

import heroes from "../../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe de retornar un heroe por ID', () => { 
        const id = 1;
        const heroe = getHeroeById( id );

        console.log(heroe);

        expect( heroe ).toEqual({ id: 1, name:'Batman', owner:'DC' })
     })

     test('getHeroeById debe de retornar undefined si no existe', () => { 
        
        const id = 100;
        const heroe = getHeroeById( id );

        console.log(heroe);

        expect( heroe ).toBeFalsy();
        // expect( typeof hero ).toBe( 'undefined' );

     })

     test('getHeroesById DC y debe retornar 3 heroes', () => { 

        const owner = 'DC';

        const heroe = getHeroesByOwner( owner );

        console.log(heroe);

        expect( heroe.length ).toBe( 3 );
        expect( heroe ).toEqual( heroe.filter( (heroe) => heroe.owner === owner ) );

      })

      test('getHeroesById Marvel y debe retornar 2 heroes', () => { 

        const owner = 'Marvel';

        const heroe = getHeroesByOwner( owner );

        console.log(heroe);

        expect( heroe.length ).toBe( 2 );
        expect( heroe ).toEqual( heroe.filter( (heroe) => heroe.owner === owner ) );

      })

 })