import heroes, { owners } from './data/heroes';

// Metodo Find
const getHeroesById = (id) => {
    // Find recibe una funcion como argumento que se conoce como callback
    return heroes.find(element => element.id === id);
}

console.log( getHeroesById(2) );

// Metodo Filter
const getHeroesByOwner = (owner) => {
    return heroes.filter(element => element.owner === owner);
}

console.log( getHeroesByOwner('Marvel') );