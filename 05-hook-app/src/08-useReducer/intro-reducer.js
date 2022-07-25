
// Estado inicial es como queremos que se encuentre el modulo de nuestra aplicacion
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    fone: false,
}];

// state => si no le proporcionamos ninguno toma initialState por default
const todoReducer = ( state = initialState, action = {} ) => {
    
    // Regresaremos un nuevo state
    if( action.type === '[TODO] add todo' ){
        // Esta NO es la forma correcta
        // state.push( action.payload );
        // Esta SI es la forma correcta
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    // type => Es un simple string para saber lo que estamos haciendo
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );

console.log({state: todos});