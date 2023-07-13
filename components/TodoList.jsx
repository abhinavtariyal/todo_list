import Note from "./Note";
const TodoList = ({ todos, deleteTodo,editTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <Note
          onDelete={deleteTodo.bind(this, todo.id)}
          onEdit = {editTodo}
          todo={todo}
          key={index}
        />
      ))}
    </>
  );
};

export default TodoList;
