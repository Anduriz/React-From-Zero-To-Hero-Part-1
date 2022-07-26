// { type: [TODO], payload: xxxxx }

export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ]

        case '[TODO] Remove Todo':
            // Por que podemos utilziarlo?
            // A diferencia de otros metodos filter no muta el arreglo
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            // Por que podemos utilziarlo?
            // A diferencia de otros metodos map no muta el arreglo
            return initialState.map( todo => {
                if (todo.id === action.payload) {
                    return{
                        ...todo, done: !todo.done
                    }
                }
                return todo;
            });

        default:
            return initialState;
    }
}