import {heroes} from '../data/heroes';

export const getHeroeById = ( id ) => {
    // Si find no encuentra nada regresa undefined
    return heroes.find( hero => hero.id === id);
}