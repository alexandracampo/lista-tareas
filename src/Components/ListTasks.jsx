import '../styles/ListTasks.scss';
import React, { useState } from 'react';

function ListTasks({ tasksList }) {

  const [checkedTasks, setCheckedTasks] = useState(false);

  const handleCheckedTask = (ev) => {
    const checkBox = ev.target.checked;
    setCheckedTasks(checkBox);
  }

  return (
    <>
      <ul>
        {tasksList.map((task, index) => (
          <li key={index}>
            <input
              onChange={handleCheckedTask}
              type="checkbox"
              value={checkedTasks}
              className={`${checkedTasks ? 'checked' : ''}`}
            >
            </input>
            <p>{task}</p>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTasks;