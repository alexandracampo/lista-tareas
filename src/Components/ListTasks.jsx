import '../styles/App.scss';
import '../styles/ListTasks.scss';
import React, { useState } from 'react';
import Task from './Task';

function ListTasks({ tasksList, setTasksList, modal, setModal }) {

  return (
    <div className='list-section'>
      <ul className='list-container'>

        <Task
          tasksList={tasksList}
          modal={modal}
          setModal={setModal}
          setTasksList={setTasksList}
        />

      </ul>
    </div>
  );
}

export default ListTasks;