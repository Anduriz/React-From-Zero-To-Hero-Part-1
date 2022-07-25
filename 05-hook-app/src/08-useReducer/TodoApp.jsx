import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  //useToDo
  const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

  return (
    <>
      <div className="row">
        <div className="col-7">
          <h4>To Do: {todosCount} / <small>Pendientes: {pendingTodosCount} </small></h4>
          <hr />
          <TodoList 
          todos={todos} 
          onDeleteTodo={ handleDeleteTodo }
          onToggleTodo={ handleToggleTodo }
          />
        </div>
        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />
          <TodoAdd onNewTodo={ handleNewTodo }/>
        </div>
      </div>
    </>
  );
};
