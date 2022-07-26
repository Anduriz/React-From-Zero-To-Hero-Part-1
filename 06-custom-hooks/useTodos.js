import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
 
// Init con los datos del localStorage
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

    // Cada vez que cambie 'todos' se ejecutara
    useEffect(() => {
        // En el local storate no poemos guardar objetos solamente strings
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
        // console.log({todo});
      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }
      // Es la funcion que vamos a utilizar para enviar la accion
      dispatchTodo( action );
    }

    const handleDeleteTodo = (id) => {
      // console.log({id});
      dispatchTodo({
        type: '[TODO] Remove Todo',
        payload: id
      })
    }

    const handleToggleTodo = (id) => {
      // console.log({id});
      dispatchTodo({
        type: '[TODO] Toggle Todo',
        payload: id
      })
    }
  
    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    };
}
