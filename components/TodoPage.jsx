import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (note) => {
    setTodos([
      ...todos,
      {
        id: Math.random().toString(),
        title: note.title,
        content: note.content,
      },
    ]);
  };

  const onDeleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onEditHandler = (data) => {
    setTodos((prevState) =>
      prevState.map((state) => {
        if (state.id === data.id) {
          return data;
        } else {
          return state;
        }
      })
    );
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={onDeleteHandler}
        editTodo={onEditHandler}
      />
    </div>
  );
};

export default TodoPage;
