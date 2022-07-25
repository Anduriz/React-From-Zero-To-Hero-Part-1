export const TodoItem = ({todoItem, onDeleteTodo, onToggleTodo}) => {
  return (
    <>
        <li
        className="list-group-item d-flex justify-content-between"
        onClick={ () => onToggleTodo(todoItem.id) }
        >
        <span 
        className={`align-self-center ${(todoItem.done) ? 'text-decoration-line-through' : ''}`}
        >{todoItem.description}</span>
        <button onClick={ () => onDeleteTodo(todoItem.id) } className="btn btn-danger">Borrar</button>
        </li>
    </>
  )
}