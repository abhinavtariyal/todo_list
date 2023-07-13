import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
const TodoForm = ({ addTodo }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTodo(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="create-note">
      <input
        name="title"
        onChange={onChangeHandler}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        value={note.content}
        onChange={onChangeHandler}
        placeholder="Add to content"
      />

      <Fab onClick={handleSubmit}>
        <AddIcon  className="className=transition ease-in-out delay-30 hover:-translate-y-1  duration-500"/>
      </Fab>
    </form>
  );
};

export default TodoForm;
