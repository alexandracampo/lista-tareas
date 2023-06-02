import '../styles/App.scss';
import '../styles/ListTasks.scss';
import React, { useState } from 'react';
import { FcFullTrash } from "react-icons/fc";

function ListTasks({ tasksList }) {

  const [checkedTasks, setCheckedTasks] = useState({});
  console.log(checkedTasks)

  const handleCheckedTask = (ev) => {
    setCheckedTasks(prevList => ({
      ...prevList,
      [ev.target.id]: ev.target.checked
    }));
  }

  return (
    <div className='list-section'>
      <ul className='list-container'>

        {tasksList.map((task, index) => (
          <li className='task' key={index}>
            <input
              id={index}
              onChange={handleCheckedTask}
              type="checkbox"
              value={checkedTasks[index]}
              className={`${checkedTasks[index] ? 'task__checked' : 'task__checkbox'}`}
            >
            </input>
            <p className='task__text'>{task}</p>
            <button className='task__remove'>
              <FcFullTrash className='img-trash' />
            </button>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default ListTasks;