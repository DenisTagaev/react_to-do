import { useState } from 'react'
import { MdOutlineAddTask } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';

import './form.scss';

export default function Form() {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleTaskChange = (event) => {
    setTask(event.target.value);
    
    if(task !== '') {
      setError(false);
    }
  };

  const handleStatusChange = () => {
    setStatus(!status);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if(task === '') {
      setError(true);
    } else {
      setError(false);
      dispatch(addTask({description: task, done: status}));
      setTask('');
      setStatus(false);
    }
      
  }

  return (
    <div className="newTaskContainer">
      <h2>Add a new task:</h2>
      <form className="addForm" onSubmit={handleFormSubmit}>
        <label>
          <span id="taskDescription_label">Description:</span>
          <input
            type="text"
            maxLength={150}
            value={task}
            onChange={handleTaskChange}
            />
        </label>
        {error && <span>Please enter a task description</span>}
        <label>
          <div id="taskStatusSelection">
            <span>Status:</span>
            <select value={status} onChange={handleStatusChange}>
              <option value={false}>Open</option>
              <option value={true}>Completed</option>
            </select>
          </div>
        </label>
        <button id="addTask_button" type="submit">
          <MdOutlineAddTask/>Add</button>
      </form>
    </div>
  );
}
