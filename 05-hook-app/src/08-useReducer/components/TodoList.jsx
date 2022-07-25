import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo }/>
        ))}
      </ul>
    </>
  );
};
