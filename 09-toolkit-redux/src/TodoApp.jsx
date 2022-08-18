import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/api/todosApi";

export const TodoApp = () => {

const [todoId, setTodoId] = useState(1);
  // const { data:todos=[], isLoading }= useGetTodosQuery();
  const { data:todo, isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {
        setTodoId(todoId + 1);
    }

    const prevTodo = () => {
        if( todoId === 1 ) return;
        setTodoId(todoId - 1);
    }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Is loading: {isLoading ? 'True' : 'False'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Prev to do</button>
      <button onClick={nextTodo}>Next to do</button>
      <ul>
        {/* {todos.map( ({id, title, completed}) => (
            <li key={id}>
                <strong>{completed ? 'Done' : 'Pending'}</strong>
                {title}
            </li>
        ))} */}

      </ul>
    </>
  );
};
