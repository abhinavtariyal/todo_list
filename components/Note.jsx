import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
const Note = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    title: todo.title,
    content: todo.content,
    id:todo.id
  });

  const [isComplete, setIsComplete] = useState(false);
  const handleComplete = (event) => {
    setIsComplete((prevState) => !prevState);
  };

  const onChangeHandler = (event) => {
    setIsEditing(true);
    const { name, value } = event.target;

    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    onEdit(data);
    setIsEditing(false)
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="note">
          <input
            name="title"
            onChange={onChangeHandler}
            value={data.title}
            placeholder="Title"
            className="border-0 outline-none"
          />
          <textarea
            name="content"
            value={data.content}
            onChange={onChangeHandler}
            placeholder="Add to content"
            className="border-0 outline-none"
          />

          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </form>
      ) : (
        <form className="note">
          {" "}
          <h1
            className={isComplete ? "line-through" : "" + "font-bold text-lg"}
            onClick={onChangeHandler}
            value={data.title}
          >
            {data.title}
          </h1>
          <p
            className={isComplete ? "line-through" : ""}
            onClick={onChangeHandler}
            value={data.content}
          >
            {data.content}
          </p>
          <Fab onClick={handleComplete}>
            <DoneIcon className="transition ease-in-out delay-15 hover:-translate-y-1  duration-300" />
          </Fab>
          <Fab onClick={onDelete}>
            <RemoveIcon className="transition ease-in-out delay-15 hover:-translate-y-1  duration-300" />
          </Fab>
        </form>
      )}
    </div>
  );
};

export default Note;
