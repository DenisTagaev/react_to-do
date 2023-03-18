import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, changeTaskStatus } from "../../redux/tasksSlice";
import { BiTaskX } from "react-icons/bi";

function Task({ task }) {
  const [isActive, setIsActive] = useState(task.done);
  const dispatch = useDispatch();

  const handleStatusClick = () => {
      const id = task.id;
      dispatch(changeTaskStatus(id));
      setIsActive(!isActive);
  };

  const handleRemoveClick = () => {
    const id = task.id;
    dispatch(removeTask(id));
  };

  return (
    <div className="taskContainer">
      <h3 className={task.done === true ? "Done" : ""}>
        {task.description}</h3>
      <hr />
      <div className="taskInfo">
        <p>Id: {task.id}</p>
        <p className={task.done === true ? "Completed" : "Open"}>
          Status: {task.done === true ? "Completed" : "Open"}
        </p>
      </div>
      <div className="controlPanel">
        <div className="activePanel">
          <button
            className={`checkbox ${isActive ? "active" : ""}`}
            type="button"
            onClick={handleStatusClick}
          ></button>
          <span className={task.done === true ? "Completed" : "Open"}>
            {task.done === true ? "Open task" : "Complete task"}
          </span>
        </div>
        <button
          className="removeTaskButton"
          type="button" 
          onClick={handleRemoveClick}
        >
          <BiTaskX/>Delete
        </button>
      </div>
    </div>
  );
}

export default Task;