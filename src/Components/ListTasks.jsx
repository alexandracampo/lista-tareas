import '../styles/App.scss';
import '../styles/ListTasks.scss';
import React, { useState } from 'react';
import Task from './Task';

function ListTasks({ tasksList }) {

  return (
    <div className='list-section'>
      <ul className='list-container'>

        <Task
          tasksList={tasksList}
        />

      </ul>
    </div>
  );
}

export default ListTasks;