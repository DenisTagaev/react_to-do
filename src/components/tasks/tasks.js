import Task from "./task";
import { useSelector, useDispatch } from "react-redux";
import { clearTasks } from "../../redux/tasksSlice";
import './tasks.scss';

import { MdCleaningServices } from 'react-icons/md';

function Tasks() {
  const store = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  return (
    <div className="tasksContainer">
      <h2>These are the tasks:</h2>
      {store.map((task, key) => (
        <Task
          key={key}
          task={task}
        >
          {task.description}
        </Task>
      ))}
      {store.length > 0 && 
        <button 
        id="removeAllTasks"
        type="button" 
        onClick={() => dispatch(clearTasks())}
        >
          <MdCleaningServices/>
          <p>Clear</p>
          <p>tasks</p>
        </button>
      }
    </div>
  );
}

export default Tasks;